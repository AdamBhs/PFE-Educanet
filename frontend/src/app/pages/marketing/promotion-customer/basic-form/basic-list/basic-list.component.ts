import {
    ChangeDetectorRef,
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
  } from '@angular/core';
  import { DialogService, FormLayout, TableWidthConfig } from 'ng-devui';
  import { Observable, of as observableOf ,Subscription} from 'rxjs';
  import { FormConfig } from 'src/app/@shared/components/admin-form';
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
        field: 'idCustomer',
        width: '100px',
      },
      {
        field: 'Categoria',
        width: '200px',
      },
      {
        field: 'Descrizione',
        width: '300px',
      },
      {
        field: 'Prezzo',
        width: '100px'
      },
      {
        field: 'Inizio',
        width: '200px',
      },
      {
        field: 'Fine',
        width: '200px',
      },
      {
        field: 'Actions',
        width: '100px',
      },
    ];
  
    basicDataSource: Item[] = [];
  
    formConfig: FormConfig = {
      layout: FormLayout.Horizontal,
      items: [
  
        {
          label: 'Categoria',
          prop: 'Categoria',
          type: 'input',
          required: true,
          rule: {
            validators: [
              { required: true },
            ],
            
          },
        },
        
      ],
      labelSize: '',
    };
  
    formData = {};
  
    editForm = null;
  
    editRowIndex = -1;
    
    numAgence: any;
    
    pager = {
      total: 0,
      pageIndex: 1,
      pageSize: 10,
    };
  
    busy: Subscription;
  
    @ViewChild('EditorTemplate', { static: true })
    EditorTemplate: TemplateRef<any>;
  
    constructor(
      private dialogService: DialogService,
      private backendService: BackendCallsService,
      private cdr: ChangeDetectorRef
    ) {}
  
    private pagerList(data, pager) {
      return data.slice(
        pager.pageSize * (pager.pageIndex - 1),
        pager.pageSize * pager.pageIndex
      );
    }
  
  
  
    ngOnInit() {
    }
  
    search() {
      this.getList();
    }
    
    getNumAgence(numAgence?: any) {
      this.numAgence = numAgence;
      console.log(this.numAgence);
      this.getList();
    }

    getList() {
      this.busy = this.getListData(this.pager)
        .subscribe((res) => {
          const data = JSON.parse(JSON.stringify(res.pageList));
          this.basicDataSource = data;
          this.pager.total = res.total;
        });
    }
  
    getListData(pager?: ListPager): Observable<any> {
  
      const observable = new Observable((observer) => {
        this.backendService.getCustomersPromotions(
          this.numAgence
        ).subscribe(
          (promotions) => {
            const simplifiedPromotions = promotions.map(promotion => ({
              idCustomer: promotion.id_customer,
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
  
    editRow(row, index) {
      this.editRowIndex = index;
      this.formData = row;
      this.editForm = this.dialogService.open({
        id: 'edit-dialog',
        width: '600px',
        maxHeight: '600px',
        title: 'Editor',
        showAnimate: false,
        contentTemplate: this.EditorTemplate,
        backdropCloseable: true,
        onClose: () => {},
        buttons: [],
      });
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
  