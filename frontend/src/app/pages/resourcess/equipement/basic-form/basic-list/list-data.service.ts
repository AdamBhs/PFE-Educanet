import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Item {
  ArticleName?: string;
  Price?: string;
  TotalQuantity?: string;
  TVA?: string;
  HT?: string;
  Fine?: string;
  TotalAmount?: string;
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
  public basicData: Item[] = [
    {
      Price: '14',
      ArticleName: 'Yriqtjdjd',
      TotalQuantity: '65',
      TotalAmount: '102',
      TVA: '2',
      HT: '5',
      PaymentType: 'Carte',
      Date: "2024-04-06"
    },
    {
      Price: '15',
      ArticleName: 'Yriqtjdjd',
      TotalQuantity: '15',
      TotalAmount: '102',
      TVA: '2',
      HT: '7',
      PaymentType: 'Carte',
      Date: '2024-04-15'
    },
  ];

  private pagerList(data, pager) {
    return data.slice(
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }

  getListData(pager: ListPager): Observable<any> {
    return observableOf({
      pageList: this.pagerList(this.basicData, pager),
      total: this.basicData.length,
    }).pipe(delay(1000));
  }
}
