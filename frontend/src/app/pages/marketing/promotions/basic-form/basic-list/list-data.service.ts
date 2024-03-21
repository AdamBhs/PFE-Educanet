import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Item {
  Categoria?: string;
  ArticleType?: string;
  Descrizione?: string;
  Prezzo?: string;
  Inizio?: string;
  Fine?: string;
  
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
      Categoria: 'Yriqtjdjd',
      Descrizione: '65',
      Prezzo: '2'
    },
    {
      ArticleType: '',
      Categoria: 'Yriqtjdjd',
      Descrizione: '15',
      Prezzo: '2'
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
