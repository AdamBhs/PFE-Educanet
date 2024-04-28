import { Injectable, ViewChild } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';
import { BasicListComponent } from './basic-list.component';

export interface Item {
  ArticleName?: string;
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
  @ViewChild(BasicListComponent) basicList: BasicListComponent;

  constructor(
    private backendService: BackendCallsService
  ) {
    
  }

  public category: any;
  public projectFormData: any;
  public listArticleNames: any;
  
  getCategory(data: any) {
    this.category = data;
  }
  
  getAttributeData(data: any) {
    this.projectFormData = data;
  }

  private pagerList(data, pager) {
    return data.slice (
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }
  
  deleteArticleByName(name: String) {
    this.backendService.deleteArticleByName(name).subscribe(
      (response) => {
        console.log('Article deleted successfully: ', response);
      },
      (error) => {
        console.error('Error delete article: ', error);
      }
    );
  }

  updateArticleByName(name: String, newPrix: String) {
    this.backendService.updateArticleByName(name, newPrix).subscribe(
      (response) => {
        console.log('Article Updated successfully:', response);
      },
      (error) => {
        console.error('Error Updated article:', error);
      }
    );
  }

  getListData(pager: ListPager): Observable<any> {

    const observable = new Observable((observer) => {
      this.backendService.getArticlesByCategorie(
        this.category
      ).subscribe(
        (articles) => {
          const simplifiedArticles = articles.map(article => ({
            ArticleName: article.articleName,
            ArticlePrice: article.articlePrix,
          }));

          observer.next({
            pageList: this.pagerList(simplifiedArticles, pager),
            total: articles.length,
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
