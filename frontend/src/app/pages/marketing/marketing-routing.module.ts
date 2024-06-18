import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingComponent } from './marketing.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionCustomerComponent } from './promotion-customer/promotion-customer.component';

const routes: Routes = [
    { 
      path: '',
      component: MarketingComponent,
      children: [], 
    },
    { path: 'promotions', component: PromotionsComponent },
    { path: 'promotion-customer', component: PromotionCustomerComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class MarketingRoutingModule { }
