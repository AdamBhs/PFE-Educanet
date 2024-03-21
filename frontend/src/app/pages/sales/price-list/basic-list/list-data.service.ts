import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Item {
  ArticleName?: string;
  ArticleType?: string;
  ArticlePrice?: string;
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
      ArticleType: '',
      ArticleName: 'Yriqtjdjd Omvqxe Xxlfgjtnj Hsyf Qecu',
      ArticlePrice: '65',
    },
    {
      ArticleType: '',
      ArticleName: 'Yriqtjdjd Omvqxe Xxlfgjtnj Hsyf Qecu',
      ArticlePrice: '15',
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
