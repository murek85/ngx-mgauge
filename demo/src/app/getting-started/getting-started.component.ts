import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NgxMGaugeOptions } from 'ngx-mgauge';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  gaugeArchOptions: NgxMGaugeOptions;
  gaugeSemiOptions: NgxMGaugeOptions;
  gaugeFullOptions: NgxMGaugeOptions;

  thresholdsConfig = {
    0: { 'color': '#FB8C00' },
    30: { 'color': '#7CB342' },
    70: { 'color': '#e53935' }
  };

  usageCode = '';
  optionsCode = '';
  thresholdsConfigCode = '';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Getting Started | ngx-mgauge');

    this.gaugeArchOptions = new NgxMGaugeOptions();

    this.gaugeSemiOptions = new NgxMGaugeOptions();
    this.gaugeSemiOptions.type = 'semi';

    this.gaugeFullOptions = new NgxMGaugeOptions();
    this.gaugeFullOptions.type = 'full';

    this.usageCode = `
import { Component } from '@angular/core';
import { NgxMGaugeOptions } from 'ngx-mgauge';

@Component({
  selector: 'app-component',
  templateUrl: 'app.html'
})
export class AppComponent {
  options: NgxMGaugeOptions;

  constructor() {
    this.options = new NgxMGaugeOptions();
    this.options.type = 'arch';
    this.options.cap = 'round';
    this.options.size = 150;
    this.options.thick = 12;
    this.options.foregroundColor = '#1e88e5';
    this.options.backgroundColor = '#e4e4e4';
  }
}

<ngx-mgauge [value]="value"
            [label]="parameter"
            [append]="unit"
            [options]="options">
</ngx-mgauge>`;

    this.optionsCode = `
@Component({ ... })
export class AppComponent {
  options: NgxMGaugeOptions;

  constructor() {
    this.options = new NgxMGaugeOptions();
    this.options.type = 'arch';
    this.options.cap = 'round';
    this.options.size = 150;
    this.options.thick = 12;
    this.options.foregroundColor = '#1e88e5';
    this.options.backgroundColor = '#e4e4e4';
  }
}

<ngx-mgauge ... [options]="options"></ngx-mgauge>`;

    this.thresholdsConfigCode = `
@Component({ ... })
export class AppComponent {
  ...
  thresholdsConfig = {
    0: {color: '#FB8C00'},
    30: {color: '#7CB342'},
    70: {color: '#e53935'}
  };
  ...
}

<ngx-mgauge ... [thresholds]="thresholdsConfig"></ngx-mgauge>`;
  }
}
