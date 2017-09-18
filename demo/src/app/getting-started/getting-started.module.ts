import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';

import { HighlightModule } from 'ngx-highlightjs';

import { NgxMGaugeModule } from 'ngx-mgauge';

@NgModule({
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    HighlightModule.forRoot({ theme: 'vs2015' }),
    NgxMGaugeModule.forRoot()
  ],
  declarations: [GettingStartedComponent],
})
export class GettingStartedModule { }
