import { Component, OnInit } from '@angular/core';
import { SourceType, originSource } from './mock-data';
import { TableWidthConfig } from 'ng-devui';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
})
export class AgencyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
      {
        field: 'name',
        header: 'Name',
        fieldType: 'text'
      },
      {
        field: 'etat',
        header: 'Etat',
        fieldType: 'text'
      },
     
    ]
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'name',
      width: '120px'
    },
    {
      field: 'etat',
      width: '120px'
    },
  ];
}
