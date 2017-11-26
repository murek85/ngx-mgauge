import { NgxMGaugeType } from './ngx-mgauge-type';
import { NgxMGaugeCap } from './ngx-mgauge-cap';

export const DEFAULTS = {
    MIN: 0,
    MAX: 100,
    TYPE: 'arch',
    THICK: 10,
    FOREGROUND_COLOR: '#1e88e5',
    BACKGROUND_COLOR: '#e4e4e4',
    FILL_COLOR: '#bbdefb',
    CAP: 'round',
    SIZE: 150,
    DURATION: 2500,
    SHOW_EXTREMUM: true
  };

export class NgxMGaugeOptions {
    type?: NgxMGaugeType = DEFAULTS.TYPE as NgxMGaugeType;
    cap?: NgxMGaugeCap = DEFAULTS.CAP as NgxMGaugeCap;
    size? = DEFAULTS.SIZE;
    thick? = DEFAULTS.THICK;
    foregroundColor? = DEFAULTS.FOREGROUND_COLOR;
    backgroundColor? = DEFAULTS.BACKGROUND_COLOR;
    fillColor? = DEFAULTS.FILL_COLOR;
    duration? = DEFAULTS.DURATION;
    showExtremum? = DEFAULTS.SHOW_EXTREMUM;
}
