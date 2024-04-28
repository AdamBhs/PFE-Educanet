import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Injectable()
export class EchartsService {
  constructor(private backendService: BackendCallsService) {}

  getPie(): Observable<any> {
    return new Observable((observer) => {
      this.backendService.getTotalCustomersByAgence().subscribe(
        (agences) => {
          const transformedData = agences.map(agence => {
            return { value: agence.num, name: agence.agence_name };
          });

          const pie = {
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
              data: transformedData.map(data => data.name),
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
                data: transformedData,
              },
            ],
          };

          observer.next(pie);
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
