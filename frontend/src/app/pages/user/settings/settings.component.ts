import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  menus = [
    {
      isActive: true,
      title: 'Basic settings',
    },
    {
      isActive: false,
      title: 'Security Settings',
    },
    {
      isActive: false,
      title: 'Notifications',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  
  itemClickFn(clickedItem: any) {
    this.menus.forEach((item) => {
      item.isActive = false;
    });
    clickedItem.isActive = true;
  }
}
