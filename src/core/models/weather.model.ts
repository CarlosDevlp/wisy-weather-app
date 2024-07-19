export interface Weather {
    number: number;
    name: string;
    startTime: string;//could be useful in order to determine what exact date it is
    endTime: string;
    isDaytime: boolean; // not relevant
    temperature: number;
    temperatureUnit: string;
    temperatureTrend: string; // not relevant
    probabilityOfPrecipitation: { // not relevant
        unitCode: string;
        value: null
    };
    windSpeed: string;
    windDirection: string; 
    icon: string; // not relevant
    shortForecast: string;
    detailedForecast: string;
}
