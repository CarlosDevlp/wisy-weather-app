import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';
import { WeatherForecastDetailsCardComponent } from './components/weather-forecast-details-card/weather-forecast-details-card.component';



@NgModule({
  declarations: [
    NavComponent,
    LoadingComponent,
    WeatherChartComponent,
    WeatherForecastDetailsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavComponent,
    LoadingComponent,
    WeatherChartComponent,
    WeatherForecastDetailsCardComponent
  ]
})
export class SharedModule { }
