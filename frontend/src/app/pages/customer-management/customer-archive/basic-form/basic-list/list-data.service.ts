import { Injectable, OnInit } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';
import { BasicFormComponent } from '../basic-form.component';

export interface Item {
  operation_number?: any;
  pin_code?: any;
  prix_total?: any;
  pay_type?: any;
  date_operation?: any;
  payement_date?: any;
  delivered_date?: any;
  customer_name?: any;

  assignee?: string;
  status?: string;
  timeline?: string;
  $checked?: boolean;
  $expandConfig?: any;
  children?: any;
  chosen?: boolean;
  $isChildTableOpen?: boolean;
}

export interface ListPager {
  pageSize?: number;
  pageIndex?: number;
}

@Injectable()
export class ListDataService{
  
  constructor(
    private backendService: BackendCallsService
  ) {

  }

  public projectFormData: any;
  

  getAttributeData(data: any) {
    this.projectFormData = data
  }

  private pagerList(data, pager) {
    return data.slice(
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }
 
  getListData(pager: ListPager): Observable<any> {
    const observable = new Observable((observer) => {
      this.backendService.getCustomerArchive(
        this.projectFormData.CustomerCode,
        this.projectFormData.numAgence,
        this.projectFormData.intervalTime[0],
        this.projectFormData.intervalTime[1]
      ).subscribe(
        (archives) => {
          observer.next({
            pageList: this.pagerList(archives, pager),
            total: archives.length,
          });
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
    return observable;
  }
}
