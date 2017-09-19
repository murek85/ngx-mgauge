import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional  } from '@angular/core';

import { NgxMGaugeComponent } from './ngx-mgauge.component';

import { NgxMGaugeOptions } from './ngx-mgauge-options';
export { NgxMGaugeOptions } from './ngx-mgauge-options';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxMGaugeComponent],
  declarations: [NgxMGaugeComponent]
})
export class NgxMGaugeModule {
  static forRoot(@Optional() config?: NgxMGaugeOptions): ModuleWithProviders {
    return {
      ngModule: NgxMGaugeModule,
      providers: [{ provide: NgxMGaugeOptions, useValue: config }]
    };
  }
}
