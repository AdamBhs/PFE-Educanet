import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/@shared/shared.module';
import {  BasicFormInvoiceModule } from './basic-form/basic-form.module';
import { InvoicesComponent } from './invoices.component';


@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    SharedModule,
    BasicFormInvoiceModule,
  ],
  exports: [
    InvoicesComponent
  ]
})
export class InvoicesModule { }
