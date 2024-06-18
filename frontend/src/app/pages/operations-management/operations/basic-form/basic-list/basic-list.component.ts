import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogService, FormLayout, TableWidthConfig } from 'ng-devui';
import { Subscription, delay } from 'rxjs';
import { Observable, of as observableOf } from 'rxjs';
import { Item, ListPager } from './interfaces';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Component({
  selector: 'da-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss'],
})
export class BasicListComponent implements OnInit {
  filterAreaShow = false;

  options = ['normal', 'borderless', 'bordered'];

  sizeOptions = ['sm', 'md', 'lg'];

  layoutOptions = ['auto', 'fixed'];

  searchForm: {
    borderType: '' | 'borderless' | 'bordered';
    size: 'sm' | 'md' | 'lg';
    layout: 'auto' | 'fixed';
  } = {
    borderType: '',
    size: 'md',
    layout: 'auto',
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'date',
      width: '200px',
    },
    {
      field: 'name_of_client',
      width: '200px',
    },
    {
      field: 'payement_type',
      width: '200px'
    },
    {
      field: 'quantity',
      width: '200px',
    },
    {
      field: 'operation_number',
      width: '200px',
    },
    {
      field: 'payement_date',
      width: '100px',
    },
  ];

  basicDataSource: Item[] = [];
  projectFormData = {
    numAgence: null,
    AgencyName: null,
    intervalTime: [null, null],
    operationCycleTime: [null, null],
  };

  formData = {};

  editForm = null;

  editRowIndex = -1;

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
  };

  numAgence: any;

  busy: Subscription;

  @ViewChild('EditorTemplate', { static: true })
  EditorTemplate: TemplateRef<any>;

  constructor(
    private dialogService: DialogService,
    private backendService: BackendCallsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  search() {
    this.getList();
  }

  private pagerList(data, pager) {
    return data.slice(
      pager.pageSize * (pager.pageIndex - 1),
      pager.pageSize * pager.pageIndex
    );
  }

  getNumAgence(value) {
    this.projectFormData.numAgence = value;
  }

  getProjectFormData(value) {

    this.projectFormData = value
    console.log(this.projectFormData.numAgence);
  }

  getListByDate() {
    this.busy = this.getListDataByDate(this.pager)
      .subscribe((res) => {
        const data = JSON.parse(JSON.stringify(res.pageList));
        this.basicDataSource = data;
        this.pager.total = res.total;
      });
  }

  getListDataByDate(pager: ListPager): Observable<any> {

    const observable = new Observable((observer) => {
      this.backendService.getOperationsByDate(
        this.projectFormData.numAgence,
        this.projectFormData.intervalTime[0],
        this.projectFormData.intervalTime[1]
      ).subscribe(
        (promotions) => {
          const simplifiedPromotions = promotions.map(promotion => ({
            idPromotion: promotion.id,
            Categoria: promotion.category,
            Descrizione: promotion.nameArticle,
            Prezzo: promotion.newprix,
            Inizio: promotion.startDate,
            Fine: promotion.endDate
          }));

          observer.next({
            pageList: this.pagerList(simplifiedPromotions, pager),
            total: promotions.length,
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

  getList() {
    this.busy = this.getListData(this.pager)
      .subscribe((res) => {
        const data = JSON.parse(JSON.stringify(res.pageList));
        this.basicDataSource = data;
        this.pager.total = res.total;
      });
  }

  getListData(pager: ListPager): Observable<any> {

    const observable = new Observable((observer) => {
      this.backendService.getOperations(
        this.projectFormData.numAgence
      ).subscribe(
        (operations) => {
          const operationsList = operations.map(operation => ({
            date: operation.date,
            name_of_client: operation.customer_name,
            payement_type: operation.pay_type,
            quantity: operation.quantity,
            operation_number: operation.operation_number,
            payement_date: operation.payement_date
          }));

          observer.next({
            pageList: this.pagerList(operationsList, pager),
            total: operations.length,
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

  deleteRow(index) {
    const results = this.dialogService.open({
      id: 'delete-dialog',
      width: '346px',
      maxHeight: '600px',
      title: 'Delete',
      showAnimate: false,
      content: 'Are you sure you want to delete it?',
      backdropCloseable: true,
      onClose: () => {},
      buttons: [
        {
          cssClass: 'primary',
          text: 'Ok',
          disabled: false,
          handler: ($event: Event) => {
            this.basicDataSource.splice(index, 1);
            results.modalInstance.hide();
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }

  onPageChange(e) {
    this.pager.pageIndex = e;
    this.getList();
  }

  onSizeChange(e) {
    this.pager.pageSize = e;
    this.getList();
  }

  reset() {
    this.searchForm = {
      borderType: '',
      size: 'md',
      layout: 'auto',
    };
    this.pager.pageIndex = 1;
    this.getList();
  }

  onSubmitted(e) {
    this.editForm.modalInstance.hide();
    this.basicDataSource.splice(this.editRowIndex, 1, e);
  }

  onCanceled() {
    this.editForm.modalInstance.hide();
    this.editRowIndex = -1;
  }
}
