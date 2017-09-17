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

View all the directives in action at https://murek85.github.io/ngx-mgauge

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-mgauge` via:
```shell
npm install --save ngx-mgauge
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-mgauge`:
```js
map: {
  'ngx-mgauge': 'node_modules/ngx-mgauge/bundles/ngx-mgauge.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { NgxMGaugeModule } from 'ngx-mgauge';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxMGaugeModule.forRoot()`):
```js
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

```js
import { NgxMGaugeModule } from 'ngx-mgauge';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxMGaugeModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Marcin Murawski. Licensed under the MIT License (MIT)

