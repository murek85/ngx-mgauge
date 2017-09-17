import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMGaugeModule } from 'ngx-mgauge';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgxMGaugeModule.forRoot()
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
