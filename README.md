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
`NgxMaugeModule` `<ngx-mgauge>` component

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: 'app.html'
})
export class AppComponent {
    
    type = "semi";
    value = 28.3;
    label = "Speed";
    appendText = "km/hr";
}
```

```html
<ngx-mgauge [type]="type" 
           [value]="value" 
           [label]="label"  
           [append]="appendText">
</ngx-mgauge>
```
# Configuration Properties

| Name      | Required  | Default value  | Possible values |
| ---       | ---       | ---               | ---            |
| `size`    | No       | `150` | Positive Integer           |
| `type`      | No        | `"arch"`     | `"full"`, `"semi"`, `"arch"`  |
| `min`  | No     | `0`  | Any numeric value  |
| `max` |  No       | `100`  | Any numeric value  |
| `value`          |  Yes       | `undefined`  | Any numeric value |
| `cap`       | No        | `"round"`    | `"round"`, `"butt"`           |
| `thick`        | No        | `12`        | Any Positive Integer |
| `label`       | No  | `undefined`                | Any String           |
| `foregroundColor`         | No       | `#1e88e5`             |  Any color value string       |
| `backgroundColor`    | No        |  `#e4e4e4`           |  Any color value string        |
| `append`   | No        | `undefined`        | Any string           |
| `prepend`      | No        | `undefined`            | Any String           |
| `duration`    | No       | `2500` | Positive Integer           |
| `thresholds` | No | `none` | {}

## Configure Threshold Color Ranges

```ts
@Component({ ... })
export class AppComponent {
    ...

    config = {
        '0': {color: 'orange'},
        '30': {color: 'green'},
        '80': {color: 'red'}
    };

    ...
}
```

```html
<ngx-mgauge ...  [thresholds]="config"></ngx-mgauge>
```

## License

Copyright (c) 2017 Marcin Murawski. Licensed under the MIT License (MIT)

