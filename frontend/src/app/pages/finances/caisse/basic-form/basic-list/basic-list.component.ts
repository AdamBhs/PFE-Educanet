import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogService, FormLayout, TableWidthConfig } from 'ng-devui';
import { Subscription } from 'rxjs';
import { FormConfig } from 'src/app/@shared/components/admin-form';
import { ListDataService, Item } from './list-data.service';

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
      field: 'Price',
      width: '200px',
    },
    {
      field: 'TotalQuantity',
      width: '200px'
    },
    {
      field: 'TotalAmount',
      width: '200px',
    },
    {
      field: 'TVA',
      width: '200px',
    },
    {
      field: 'HT',
      width: '100px',
    },
    {
      field: 'PaymentType',
      width: '100px',
    },
    {
      field: 'Date',
      width: '100px',
    },
  ];

  basicDataSource: Item[] = [];

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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getList();
  }

  search() {
    this.getList();
  }

  getList() {
    if(this.listDataService.submit === false) {
      this.busy = this.listDataService
        .getListData(this.pager)
        .subscribe((res) => {
          const data = JSON.parse(JSON.stringify(res.pageList));
          this.basicDataSource = data;
          this.pager.total = res.total;
        });
    } else {
      this.busy = this.listDataService
        .getListDataByDate(this.pager)
        .subscribe((res) => {
          const data = JSON.parse(JSON.stringify(res.pageList));
          this.basicDataSource = data;
          this.pager.total = res.total;
        });
    }
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

}
