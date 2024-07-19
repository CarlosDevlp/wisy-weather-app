import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherPage } from './weather.page';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    WeatherPage
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule
]
})
export class WeatherModule { }
