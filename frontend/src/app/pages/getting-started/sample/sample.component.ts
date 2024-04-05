import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
// import { SourceType, originSource } from '../../sales/agency/mock-data';
import { TableWidthConfig } from 'ng-devui';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, AfterViewInit {
  constructor() {}
  
  // Price per agency
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
        radius: ['40%', '60%'],
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
          { value: 1048, name: 'Carpi' },
          { value: 735, name: 'Bazzano' },
          { value: 580, name: 'Modena' },
          { value: 484, name: 'Soliera' },
        ]
      }
    ]
  }

  // Total Customers
  data_2: number[] = [];
  option_2: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Bazzano', 'Modena', 'Soliera', 'Carpi'],
      inverse: false,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 3
    },
    yAxis: {

    },
    series: [
      {
        name: 'Quantity',
        type: 'bar',
        data: this.data_2,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 1000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };

  updateChartData1(): void {
    setInterval(() => {
      for (let i = 0; i < this.data.length; ++i) {
        if (Math.random() > 0.9) {
          this.data[i] += Math.round(Math.random() * 200);
        } else {
          this.data[i] += Math.round(Math.random() * 200);
        }
      }
      this.option_2 = {
        ...this.option_2,
        series: [{
          ...this.option_2.series[0],
          data: [...this.data]
        }]
      };
    }, 5000);
  }

  initializeChartData1(): void {
    for (let i = 0; i < 4; ++i) {
      this.data_2.push(Math.round(Math.random() * 200));
    }
  }
  

  // Client Connected Today
  categories: string[] = [];
  categories2: number[] = [];
  data: number[] = [];
  data2: number[] = [];
  count: number = 11;
  
  option_3: EChartsOption = {
    title: {
      text: 'Dynamic Data'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
    legend: {},
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: this.categories
      },
      {
        type: 'category',
        boundaryGap: true,
        data: this.categories2
      }
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Price',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
      },
      {
        type: 'value',
        scale: true,
        name: 'Order',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2]
      }
    ],
    series: [
      {
        name: 'Dynamic Bar',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: this.data
      }
    ]
  };

  initializeChartData(): void {
    let now = new Date();
    let len = 10;
    while (len--) {
      this.categories.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
      now = new Date(+now - 2000);
    }

    let len2 = 10;
    while (len2--) {
      this.categories2.push(10 - len2 - 1);
    }

    let len3 = 10;
    while (len3--) {
      this.data.push(Math.round(Math.random() * 1000));
    }

    let len4 = 0;
    while (len4 < 10) {
      this.data2.push(+(Math.random() * 10 + 5).toFixed(1));
      len4++;
    }
  }

  updateChartData(): void {
    setInterval(() => {
      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');

      this.data.shift();
      this.data.push(Math.round(Math.random() * 1000));
      this.data2.shift();
      this.data2.push(+(Math.random() * 10 + 5).toFixed(1));

      this.categories.shift();
      this.categories.push(axisData);
      this.categories2.shift();
      this.categories2.push(this.count++);

      this.option_3 = { ...this.option_3};
    }, 5000);
  }

  // States de agency
  // basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  // dataTableOptions = {
  //   columns: [
  //     {
  //       field: 'name',
  //       header: 'Name',
  //       fieldType: 'text'
  //     },
  //     {
  //       field: 'etat',
  //       header: 'Etat',
  //       fieldType: 'text'
  //     },
     
  //   ]
  // };

  // tableWidthConfig: TableWidthConfig[] = [
  //   {
  //     field: 'name',
  //     width: '120px'
  //   },
  //   {
  //     field: 'etat',
  //     width: '120px'
  //   },
  // ];


  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  ngOnInit(): void {
    this.updateChartData1();
    this.updateChartData();
    this.initializeChartData();
    this.initializeChartData1();
    
  }
}
