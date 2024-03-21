import { NgModule } from '@angular/core';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PriceListComponent } from './price-list/price-list.component';
import { CaisseComponent } from './caisse/caisse.component';
import { SellPointsComponent } from './sell-points/sell-points.component';
import { AgencyComponent } from './agency/agency.component';
import { BasicFormModule } from './price-list/basic-form/basic-form.module';
import { BasicListModule } from './price-list/basic-list/basic-list.module';
import { BasicFormCaisseModule } from './caisse/basic-form-caisse/basic-form.module';
import { TableComponent } from './caisse/table/table.component';
import { DataTableModule } from 'ng-devui';

@NgModule({
  declarations: [
    SalesComponent,
    PriceListComponent,
    CaisseComponent,
    SellPointsComponent,
    AgencyComponent,
    TableComponent
  ],
  imports: [
    SharedModule,
    SalesRoutingModule,
    BasicFormModule,
    BasicListModule,
    BasicFormCaisseModule,
    DataTableModule
  ],
  providers: [],
})
export class SalesModule { }
