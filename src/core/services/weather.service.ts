import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Weather } from '../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  fetchWeatherData(id: string):Observable<Weather[]> {
    const endpoint= `${environment.API_BASE_URL}/gridpoints/${id}/31,80/forecast`;
    //const endpoint= `./mocks/weather.json`;
    return this.httpClient.get<Weather[]>(endpoint)
      .pipe(map((response: any) => 
        response?.properties?.periods || []
      ));
  }
}
