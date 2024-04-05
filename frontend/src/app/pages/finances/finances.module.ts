import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesRoutingModule } from './finances-routing.module';
import { FinancesComponent } from './finances.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { BasicFormModule } from './price-list/basic-form/basic-form.module';
import { BasicListModule } from './price-list/basic-list/basic-list.module';
import { DataTableModule } from 'ng-devui';
import { PriceListComponent } from './price-list/price-list.component';
import { CaisseComponent } from './caisse/caisse.component';
import { InvoicesComponent } from './invoices/invoices.component';


@NgModule({
  declarations: [
    FinancesComponent,
    PriceListComponent,
    CaisseComponent,
    InvoicesComponent
  ],
  imports: [
    SharedModule,
    FinancesRoutingModule,
    BasicFormModule,
    BasicListModule,
    DataTableModule
  ]
})
export class FinancesModule { }
