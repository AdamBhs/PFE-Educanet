import { NgModule } from '@angular/core';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingComponent } from './marketing.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { PromotionsModule } from './promotions/promotions.module';
import { PromotionCustomerModule } from './promotion-customer/promotion-customer.module';


@NgModule({
  declarations: [
    MarketingComponent,
  ],
  imports: [
    SharedModule,
    MarketingRoutingModule,
    PromotionsModule,
    PromotionCustomerModule
  ],
  providers: [],
})
export class MarketingModule { }
