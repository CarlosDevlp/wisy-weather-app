import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'weather',
        loadChildren: () => import('../pages/weather/weather.module').then(m => m.WeatherModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
