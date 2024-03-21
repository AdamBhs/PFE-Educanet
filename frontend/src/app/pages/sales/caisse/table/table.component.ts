import { Component, OnInit } from '@angular/core';
import { TableWidthConfig } from 'ng-devui/data-table';
import { SourceType, originSource } from './mock-data';

@Component({
  selector: 'table-data',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
      {
        field: 'ArticleName',
        header: 'Article Name',
        fieldType: 'text'
      },
      {
        field: 'price',
        header: 'Price',
        fieldType: 'number'
      },
      {
        field: 'totalQuantity',
        header: 'Total Quantity',
        fieldType: 'number'
      },
      {
        field: 'totalAmount',
        header: 'Total Amount',
        fieldType: 'number'
      },
      {
        field: 'TVA',
        header: 'TVA',
        fieldType: 'number'
      },
      {
        field: 'HT',
        header: 'HT',
        fieldType: 'number'
      },
      {
        field: 'paymentType',
        header: 'Payment Type',
        fieldType: 'string'
      },
      {
        field: 'date',
        header: 'Date',
        fieldType: 'date'
      },
      {
        field: 'deleted',
        header: 'Deleted',
        fieldType: 'string'
      },
    ]
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'articleName',
      width: '70px'
    },
    {
      field: 'price',
      width: '70px'
    },
    {
      field: 'totalQuantity',
      width: '70px'
    },
    {
      field: 'totalAmount',
      width: '70px'
    },
    {
      field: 'TVA',
      width: '70px',
    },
    {
      field: 'HT',
      width: '70px',
    },
    {
      field: 'paymentType',
      width: '70px',
    },
    {
      field: 'date',
      width: '70px',
    },
    {
      field: 'deleted',
      width: '70px',
    }
  ];

  ngOnInit() {
  }
}
