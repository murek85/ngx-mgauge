import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgxMGaugeComponent } from './ngx-mgauge.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxMGaugeComponent],
  declarations: [NgxMGaugeComponent]
})
export class NgxMGaugeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMGaugeModule
    };
  }
}
