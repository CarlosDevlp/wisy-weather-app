import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../core/services/weather.service';
import { ContentService } from '../../core/services/content.service';
import { Weather } from '../../core/models/weather.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrl: './weather.page.css'
})
export class WeatherPage {
  id: string = 'x';
  isLoading = false;
  title = '';
  //weatherData: Weather[] = [];
  weatherData$: Observable<Weather[]> | undefined;
  selectedWeather: Weather | undefined;
  chartLinesColor = '#e6004a';
  constructor(
    private activatedRoute:ActivatedRoute, 
    private weatherService:WeatherService,
    private contentService:ContentService
  ){}

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.paramMap.get('id') || 'x';
    if(this.id=='TOP'){
      this.chartLinesColor = '#736ca0';
    } 
    this.getTitle();
    this.weatherData$ =this.weatherService.fetchWeatherData(this.id);
  }

  getTitle() {
    this.title = this.contentService.getMenuItemsById(this.id)?.title || '';
  }

  showDetails(data: Weather) {
    this.selectedWeather = data; 
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

}
