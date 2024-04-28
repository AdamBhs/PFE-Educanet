import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancesRoutingModule } from './finances-routing.module';
import { FinancesComponent } from './finances.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DataTableModule } from 'ng-devui';
import { InvoicesComponent } from './invoices/invoices.component';
import { PriceListModule } from './price-list/price-list.module';
import { CaisseModule } from './caisse/caisse.module';
import { InvoicesModule } from './invoices/invoices.module';


@NgModule({
  declarations: [
    FinancesComponent,
  ],
  imports: [
    SharedModule,
    FinancesRoutingModule,
    PriceListModule,
    DataTableModule,
    CaisseModule,
    InvoicesModule
  ]
})
export class FinancesModule { }
