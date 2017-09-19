<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/murek85/ngx-mgauge/master/demo/src/assets/logo.svg">
</p>

# ngx-mgauge - Angular library built with using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/ngx-mgauge.svg)](https://badge.fury.io/js/ngx-mgauge)
[![Build Status](https://travis-ci.org/murek85/ngx-mgauge.svg?branch=master)](https://travis-ci.org/murek85/ngx-mgauge)
[![Coverage Status](https://coveralls.io/repos/github/murek85/ngx-mgauge/badge.svg?branch=master)](https://coveralls.io/github/murek85/ngx-mgauge?branch=master)
[![dependency Status](https://david-dm.org/murek85/ngx-mgauge/status.svg)](https://david-dm.org/murek85/ngx-mgauge)
[![devDependency Status](https://david-dm.org/murek85/ngx-mgauge/dev-status.svg?branch=master)](https://david-dm.org/murek85/ngx-mgauge#info=devDependencies)

## Demo

Checkout the live demo https://murek85.github.io/ngx-mgauge

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

# Getting Started

#### Install npm module
Now install `ngx-mgauge` via:
```bash
npm install --save ngx-mgauge
```

#### Import the _NgxMGaugeModule_ 
Once installed you need to import the main module:
```ts
import { NgxMGaugeModule } from 'ngx-mgauge';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxMGaugeModule.forRoot()`):
```ts
import { NgxMGaugeModule } from 'ngx-mgauge';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxMGaugeModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxMGaugeModule `:

```ts
import { NgxMGaugeModule } from 'ngx-mgauge';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxMGaugeModule, ...], 
})
export class OtherModule {
}
```

#### Usage component in HTML
`NgxMGaugeModule` `<ngx-mgauge>` component

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: 'app.html'
})
export class AppComponent {
    
    type = "semi";
    value = 50;
    parameter = "Use";
    unit = "%";
}
```

```html
<ngx-mgauge [type]="type" 
            [value]="value" 
            [label]="parameter"  
            [append]="unit">
</ngx-mgauge>
```

# Configuration Properties

| Name      | Default value  | Possible values |
| ---       | ---               | ---            |
| `label`       | `undefined`                | Any String           |
| `append`   | `undefined`        | Any string           |
| `prepend`      | `undefined`            | Any String           |
| `value*`          | `undefined`  | Any numeric value |
| `min`  | `0`  | Any numeric value  |
| `max` |  `100`  | Any numeric value  |
| `options` | `none` | {}
| `thresholds` | `none` | {}

## Options

| Name      | Default value  | Possible values |
| ---       | ---               | ---            |
| `size`    | `150` | Positive Integer           |
| `type`      | `"arch"`     | `"full"`, `"semi"`, `"arch"`  |
| `cap`       | `"round"`    | `"round"`, `"butt"`           |
| `thick`        | `12`        | Any Positive Integer |
| `foregroundColor`         | `#1e88e5`             |  Any color value string       |
| `backgroundColor`    | `#e4e4e4`           |  Any color value string        |

```ts
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
```

```html
<ngx-mgauge ... [options]="options"></ngx-mgauge>
```

## Configure Threshold Color Ranges

```ts
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
```

```html
<ngx-mgauge ... [thresholds]="thresholdsConfig"></ngx-mgauge>
```

## License

Copyright (c) 2017 Marcin Murawski. Licensed under the MIT License (MIT)

