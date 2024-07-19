import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../core/services/weather.service';
import { ContentService } from '../../core/services/content.service';
import { Weather } from '../../core/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrl: './weather.page.css'
})
export class WeatherPage {
  id: string = 'x';
  isLoading = false;
  title = '';
  weatherData: Weather[] = [];
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
    this.getWeatherDataSet();
  }

  async getWeatherDataSet() {
    this.isLoading = true;
    this.weatherService.fetchWeatherData(this.id).subscribe((data)=>{
      console.log('fetched weather data: ',data);
      this.weatherData = data;
      this.isLoading = false;
    });
  }

  getTitle() {
    this.title = this.contentService.getMenuItemsById(this.id)?.title || '';
  }

  showDetails(dataIndex: number) {
    this.selectedWeather = this.weatherData[dataIndex]; 
  }

}
