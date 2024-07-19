import { Component } from '@angular/core';
import { MenuItem } from '../../../core/models/menu-item';
import { ContentService } from '../../../core/services/content.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  public menuItems: MenuItem[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.menuItems = this.contentService.getMenuItems();
  }
}
