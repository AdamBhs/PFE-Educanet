import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts'
import { SourceType, originSource } from '../../sales/agency/mock-data';
import { TableWidthConfig } from 'ng-devui';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, AfterViewInit {
  constructor() {}

  option_1: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['30%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  }
  option_2: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', 'Quantity'],
        ['Bazzano', 43.3],
        ['Modena', 83.1],
        ['Soliera', 86.4],
        ['Carpi', 72.4]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    
    series: [{ type: 'bar' }]
  }

  // States de agency
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


  ngOnInit(): void {}

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
