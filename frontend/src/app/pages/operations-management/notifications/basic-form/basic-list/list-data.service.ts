import { Injectable, ViewChild } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';
import { BasicListComponent } from './basic-list.component';

export interface Item {
  Title?: string;
  Description?: string;
  Date?: string;
  id?: any;

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
  public numAgence: any;
  public category: any;
  public projectFormData: any;
  public listArticleNames: any;

  private pagerList(data, pager) {
    return data.slice(
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }
  
  getNumAgence(numero: any) {
    this.numAgence = numero;
  }

  deleteNotification(id: any) {
    this.backendService.deleteNotification(id).subscribe(
      (response) => {
        console.log('notification deleted successfully:', response);
      },
      (error) => {
        console.error('Error delete notification:', error);
      }
    );
  }


  getListData(pager: ListPager): Observable<any> {

    const observable = new Observable((observer) => {
      this.backendService.getNotifications(
        this.numAgence
      ).subscribe(
        (notifications) => {
          const notificationsList = notifications.map(notification => ({
            Title: notification.title,
            Description: notification.description,
            Date: notification.date,
            id: notification.idNotification
          }));

          observer.next({
            pageList: this.pagerList(notificationsList, pager),
            total: notifications.length,
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
