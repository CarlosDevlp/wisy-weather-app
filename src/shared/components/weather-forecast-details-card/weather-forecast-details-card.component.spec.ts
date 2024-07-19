import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastDetailsCardComponent } from './weather-forecast-details-card.component';

describe('WeatherForecastDetailsCardComponent', () => {
  let component: WeatherForecastDetailsCardComponent;
  let fixture: ComponentFixture<WeatherForecastDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherForecastDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherForecastDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
