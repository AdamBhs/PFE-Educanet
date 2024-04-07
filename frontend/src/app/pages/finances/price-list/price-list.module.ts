import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DataTableModule } from 'ng-devui';
import { BasicFormModule } from './basic-form/basic-form.module';
import { PriceListComponent } from './price-list.component';
import { SharedModule } from 'src/app/@shared/shared.module';



@NgModule({
  declarations: [
    PriceListComponent
  ],
  imports: [
    SharedModule,
    BasicFormModule,
    DataTableModule,
  ],
  exports: [
    PriceListComponent
  ]
})
export class PriceListModule { }
