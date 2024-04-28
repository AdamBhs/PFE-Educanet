import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-archive',
  templateUrl: './customer-archive.component.html',
  styleUrls: ['./customer-archive.component.scss'],
})
export class CustomerArchiveComponent {
  options = [
    {
      name: 'Bazzano',
      value: 'Bazzao'
    },
    {
      name: 'Modena',
      value: 'Modena'
    },
    {
      name: 'Soliera',
      value: 'Soliera'
    },
    {
      name: 'Carpi',
      value: 'Carpi'
    },
  ];
  selectedOption: string = '';
  valueChoice: string;

  constructor() {
  }

  onOptionSelected(event: any) {
    this.selectedOption = event.target.value;
    console.log(event.target.value)
  }
}
