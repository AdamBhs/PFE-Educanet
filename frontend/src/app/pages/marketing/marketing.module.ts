import { NgModule } from '@angular/core';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingComponent } from './marketing.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PromotionsComponent } from './promotions/promotions.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PercentageComponent } from './percentage/percentage.component';
import { BasicFormPromModule } from './promotions/basic-form/basic-form.module';
import { BasicListModule } from './promotions/basic-form/basic-list/basic-list.module';


@NgModule({
  declarations: [
    MarketingComponent,
    PromotionsComponent,
    InvoiceComponent,
    PercentageComponent
  ],
  imports: [
    SharedModule,
    MarketingRoutingModule,
    BasicFormPromModule,
  
  ],
  providers: [],
})
export class MarketingModule { }
