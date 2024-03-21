import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

@Injectable()
export class EchartsService {
  private pie = {
    grid: {
      containLabel: true,
      bottom: '23',
      top: '60',
      left: '23',
      right: '38',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'auto',
      top: 'center',
      data: ['Carpi', 'Bazzano', 'Modena', 'SOLIERA'],
    },
    series: [
      {
        name: 'N°Customers',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
          },
        },
        label: {
          normal: {
            show: false,
            position: 'center',
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          { value: 335, name: 'Carpi' },
          { value: 310, name: 'Bazzano' },
          { value: 234, name: 'Modena' },
          { value: 135, name: 'SOLIERA' },
        ],
      },
    ],
  };

  getPie(): Observable<any> {
    return observableOf(this.pie);
  }
}
