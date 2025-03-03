import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Weather } from '../../../core/models/weather.model';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrl: './weather-chart.component.css'
})
export class WeatherChartComponent {
  @ViewChild('chart') chart: ElementRef={} as ElementRef;
  @Input() label = '';
  @Input() weatherData:Weather[] = [];
  @Input() color = '';
  @Output() onTooltipClick = new EventEmitter<Weather>();
  labels:string[] = [];
  dataset:number[] = [];
  selectedIndex = -1;
  
  constructor() { }

  ngAfterViewInit(): void {
    this.extractLabelsAndDataset();
    this.setUpChart();
    this.onTooltipClick.emit(this.weatherData[0]);
  }

  extractLabelsAndDataset() {
    this.weatherData.forEach(weather => {
      this.labels.push(weather.name);
      this.dataset.push(weather.temperature);
    });
  }

  setUpChart() {  
    new Chart(this.chart.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.dataset,
          backgroundColor: this.color,
          borderWidth: 1,
          pointStyle: 'rect',
          pointRadius: 8,
        }]
      },
      options: {
        responsive: true,
        plugins:{
          tooltip:{
            callbacks: {
              label: (context) => {
                const index = context.dataIndex;
                const label = context.dataset.label;
                const value = context.dataset.data[index];
                return `${label}: ${value} °F`; 
              },
              afterBody: (context) => {
                const lines = [];
                const index = context[0].dataIndex;
                const {shortForecast, windDirection, windSpeed} = this.weatherData[index];
                lines.push(`Wind Speed: ${windSpeed}`);
                lines.push(`Wind: ${windDirection}`);
                this.selectedIndex = index;
                console.log('clicked: ', index);
                //lines.push(`Forecast: ${shortForecast}`);
                return lines; 
              },
              footer: (context) => {
                const index = context[0].dataIndex;
                const {shortForecast} = this.weatherData[index];
                return `${shortForecast}`; 
              },

              afterFooter: (context) => {
                return '(click for more info)';
              }
            }
          }
        }
      }
    });
  }


}
