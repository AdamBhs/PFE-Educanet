import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

export interface Item {
  ArticleName?: string;
  Price?: string;
  TotalQuantity?: string;
  TotalAmount?: string;
  TVA?: string;
  HT?: string;
  PaymentType?: string;
  Date?: any;

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
export class ListDataService {

  constructor(
    private backendService: BackendCallsService
  ) {
    
  }
  public projectFormData: any;
  private numAgence: any;
  public submit: boolean = false;

  private pagerList(data, pager) {
    return data.slice(
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }

  getNumAgence(data: any) {
    this.numAgence = data;
  }
    
  getAttributeData(data: any) {
    this.projectFormData = data;
    this.submit = this.projectFormData.Submited;
  }

  getListData(pager: ListPager): Observable<any> {

    const observable = new Observable((observer) => {
      this.backendService.getCaisseData(
        this.numAgence
      ).subscribe(
        (datas) => {
          const Caisse = datas.map(data => ({
            Price: data.Price,
            ArticleName: data.ArticleName,
            TotalQuantity: data.TotalQuantity,
            TotalAmount: data.TotalAmount,
            TVA: data.TVA,
            HT: data.HT,
            PaymentType: data.PaymentType,
            Date: data.Date
          }));

          observer.next({
            pageList: this.pagerList(Caisse, pager),
            total: Caisse.length,
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

  getListDataByDate(pager: ListPager): Observable<any> {

    const observable = new Observable((observer) => {
      this.backendService.getCaisseDataByDate(
        this.numAgence,
        this.projectFormData.intervalTime[0],
        this.projectFormData.intervalTime[1]
      ).subscribe(
        (datas) => {
          const Caisse = datas.map(data => ({
            Price: data.Price,
            ArticleName: data.ArticleName,
            TotalQuantity: data.TotalQuantity,
            TotalAmount: data.TotalAmount,
            TVA: data.TVA,
            HT: data.HT,
            PaymentType: data.PaymentType,
            Date: data.Date
          }));

          observer.next({
            pageList: this.pagerList(Caisse, pager),
            total: Caisse.length,
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
