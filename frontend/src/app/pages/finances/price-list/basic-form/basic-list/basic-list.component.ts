import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogService, FormLayout, TableWidthConfig } from 'ng-devui';
import { Subscription, delay, of } from 'rxjs';
import { FormConfig } from 'src/app/@shared/components/admin-form';
import { ListDataService, Item } from './list-data.service';
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
      field: 'ArticleName',
      width: '200px',
    },
    {
      field: 'ArticlePrice',
      width: '100px',
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
        label: 'ArticlePrice',
        prop: 'ArticlePrice',
        type: 'input',
        required: true,
        rule: {
          validators: [
            { required: true },
          ],
          asyncValidators: [
            {
              sameName: this.isFloat.bind(this),
              message: 'Wrong input.'
            }
          ]
        },
      },
      
    ],
    labelSize: '',
  };

  formData = {};

  editForm = null;

  editRowIndex = -1;

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
  };

  busy: Subscription;

  @ViewChild('EditorTemplate', { static: true })
  EditorTemplate: TemplateRef<any>;

  constructor(
    private listDataService: ListDataService,
    private dialogService: DialogService,
    private backendService: BackendCallsService,
    private cdr: ChangeDetectorRef
  ) {
    
  }

  ngOnInit() {
    this.getList();
    setTimeout(() => {
      console.log(this.basicDataSource);
    }, 7000);

  }

  search() {
    this.getList();
  }

  getList() {
    this.busy = this.listDataService
      .getListData(this.pager)
      .subscribe((res) => {
        const data = JSON.parse(JSON.stringify(res.pageList));
        this.basicDataSource = data;
        this.pager.total = res.total;
      });
  }

  isFloat(value) {
    const regex = /^[+]?[1-9]*\.?[0-9]+$/;
    
    return of(regex.test(value)).pipe(delay(500));
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

  deleteRow(row, index) {
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
            console.log(row["idArticle"]);
            this.basicDataSource.splice(index, 1);
            results.modalInstance.hide();
            this.listDataService.deleteArticleById(row["idArticle"]);
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

  onSubmitted(event) {
    this.editForm.modalInstance.hide();
    this.basicDataSource.splice(this.editRowIndex, 1, event);
    console.log(event);
    this.listDataService.updateArticleByName(event["ArticleName"], event["ArticlePrice"]);
  }

  onCanceled() {
    this.editForm.modalInstance.hide();
    this.editRowIndex = -1;
  }
}
