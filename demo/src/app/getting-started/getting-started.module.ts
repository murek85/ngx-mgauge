import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';

import { NgxMGaugeModule } from 'ngx-mgauge';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    NgxMGaugeModule.forRoot()
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule { }
