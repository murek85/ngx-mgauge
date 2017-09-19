import {
  Component,
  HostBinding,
  Input,
  SimpleChanges,
  ViewEncapsulation,
  Renderer,
  AfterViewInit,
  ElementRef,
  OnChanges,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { NgxMGaugeType } from './ngx-mgauge-type';
import { NgxMGaugeOptions, DEFAULTS } from './ngx-mgauge-options';

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}
export function coerceNumberProperty(value: any, fallbackValue = 0): number {
  return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}
export function cssUnit(value: number) {
  return `${value}px`;
}
export function isNumber(value: string) {
  return value !== undefined && !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

@Component({
  selector: 'ngx-mgauge',
  templateUrl: './ngx-mgauge.component.html',
  styleUrls: ['./ngx-mgauge.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NgxMGaugeComponent implements AfterViewInit, OnChanges, OnDestroy {
  @HostBinding('attr.role') role = 'mgauge';
  @HostBinding('class.mgauge') gaugeMeterClass = true;
  @HostBinding('attr.aria-valuemin') ariaValueminAttr = 'min';
  @HostBinding('attr.aria-valuemax') ariaValuemaxAttr = 'max';
  @HostBinding('attr.aria-valuenow') ariaValueNowAttr = 'value';

  @ViewChild('canvas')
  _canvas: ElementRef;

  private _initialized: boolean = false;
  private _context: CanvasRenderingContext2D | null;

  private _min: number = DEFAULTS.MIN;

  @Input()
  get min(): number { return this._min; }
  set min(value: number) {
      this._min = coerceNumberProperty(value, DEFAULTS.MIN);
  }

  private _max: number = DEFAULTS.MAX;

  @Input()
  get max(): number { return this._max; }
  set max(value: number) {
      this._max = coerceNumberProperty(value, DEFAULTS.MAX);
  }

  @Input()
  label: string;

  @Input()
  append: string;

  @Input()
  prepend: string;

  @Input()
  thresholds: Object;

  @Input()
  options: NgxMGaugeOptions;

  private _value: number = 0;

  @Input()
  get value() { return this._value; }
  set value(val: number) {
      this._value = coerceNumberProperty(val);
  }

  @Input()
  duration: number = 2500;

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer) { }

  ngOnChanges(changes: SimpleChanges) {
      const isTextChanged = changes['label'] || changes['append'] || changes['prepend'];
      const isDataChanged = changes['value'] || changes['min'] || changes['max'];

      if (this._initialized) {
          if (isDataChanged) {
              this._update();
          } else if (!isTextChanged) {
              this._destroy();
              this._init();
          }
      }
  }

  private _updateSize() {
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', cssUnit(this.options.size));
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'height', cssUnit(this.options.size));
  }

  ngAfterViewInit() {
      if (this._canvas) {
          this._init();
      }
  }

  ngOnDestroy() {
      this._destroy();
  }

  private _getBounds(type: NgxMGaugeType) {
      let head: number, tail: number;
      switch (type) {
        case 'semi':
            head = Math.PI;
            tail = 2 * Math.PI;
            break;
        case 'full':
            head = 1.5 * Math.PI;
            tail = 3.5 * Math.PI;
            break;
        case 'arch':
            head = 0.8 * Math.PI;
            tail = 2.2 * Math.PI;
            break;
      }
      return { head, tail };
  }

  private _drawShell(start: number, middle: number, tail: number, color: string) {
      let center = this._getCenter(),
          radius = this._getRadius();

      this._clear();
      if (this._context) {
          this._context.beginPath();
          this._context.strokeStyle = this.options.backgroundColor;
          this._context.arc(center.x, center.y, radius, middle, tail, false);
          this._context.stroke();

          this._context.beginPath();
          this._context.strokeStyle = color;
          this._context.arc(center.x, center.y, radius, start, middle, false);
          this._context.stroke();
      }
  }

  private _clear() {
      if (this._context) {
          this._context.clearRect(0, 0, this._getWidth(), this._getHeight());
      }
  }

  private _getWidth() {
      return this.options.size;
  }

  private _getHeight() {
      return this.options.size;
  }

  private _getRadius() {
      const center = this._getCenter();
      return center.x - this.options.thick;
  }

  private _getCenter() {
    const x = this._getWidth() / 2,
          y = this._getHeight() / 2;
      return { x, y };
  }

  private _init() {
      this._context = (this._canvas.nativeElement as HTMLCanvasElement).getContext('2d');
      this._initialized = true;
      this._updateSize();
      this._setupStyles();
      this._create();
  }

  private _destroy() {
      this._clear();
      this._context = null;
  }

  private _setupStyles() {
      if (this._context) {
          this._context.canvas.width = this.options.size;
          this._context.canvas.height = this.options.size;
          this._context.lineCap = this.options.cap.toString();
          this._context.lineWidth = this.options.thick;
      }
  }

  private _getForegroundColorByRange(value: number) {
      const match = Object.keys(this.thresholds)
          .filter(function (item) { return isNumber(item) && Number(item) <= Number(value); })
          .sort().reverse()[0];

      return match !== undefined
          ? this.thresholds[match].color || this.options.foregroundColor
          : this.options.foregroundColor;
  }

  private _create() {
      let self = this,
          type = this.options.type,
          bounds = this._getBounds(type),
          duration = this.duration,
          min = this.min,
          max = this.max,
          value = clamp(this.value, this.min, this.max),
          head = bounds.head,
          unit = (bounds.tail - bounds.head) / (max - min),
          displacement = unit * (value - min),
          tail = bounds.tail,
          color = this._getForegroundColorByRange(value),
          requestID: any,
          starttime: any;

      function animate(timestamp: any) {
          timestamp = timestamp || new Date().getTime();
          const runtime = timestamp - starttime;
          let progress = runtime / duration;
          progress = Math.min(progress, 1);

          self._drawShell(head, head + displacement * progress, tail, color);
          if (runtime < duration) {
              requestID = window.requestAnimationFrame(ts => animate(ts));
          } else {
              window.cancelAnimationFrame(requestID);
          }
      }

      window.requestAnimationFrame((timestamp) => {
          starttime = timestamp || new Date().getTime();
          animate(timestamp);
      });
  }

  private _update() {
      this._clear();
      this._create();
  }
}
