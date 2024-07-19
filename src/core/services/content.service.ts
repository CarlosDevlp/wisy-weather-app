import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public menuItems: MenuItem[] = [
    {
      id: 'home',
      title: 'Home',
      link: '/'
    },
    {
      id: 'LWX',
      title: 'District of Columbia Forecast',
      link: '/weather/LWX'
    },
    {
      id: 'TOP',
      title: 'Kansas Forecast',
      link: '/weather/TOP'
    },
  ];

  constructor() { }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  getMenuItemsById(id: string): MenuItem | undefined {
    return this.menuItems.find(item => item.id === id);
  }


}
