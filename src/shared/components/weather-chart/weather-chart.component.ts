import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { Weather } from '../../../core/models/weather.model';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrl: './weather-chart.component.css'
})
export class WeatherChartComponent {
  @Input() label = '';
  @Input() weatherData:Weather[] = [];
  @Input() color = '';
  @Output() onTooltipClick = new EventEmitter<number>();
  labels:string[] = [];
  dataset:number[] = [];
  selectedIndex = -1;
  @ViewChild('chart') chart: ElementRef={} as ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    this.extractLabelsAndDataset();
    this.setUpChart();
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
                return `${label}: ${value} °F`; // Customize tooltip content
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
                return lines; // Customize tooltip content
              },
              footer: (context) => {
                const index = context[0].dataIndex;
                const {shortForecast} = this.weatherData[index];
                return `${shortForecast}`; // Customize tooltip content
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

  ngOnInit(): void {
    
  }

}
