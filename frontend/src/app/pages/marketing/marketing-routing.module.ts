import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingComponent } from './marketing.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PercentageComponent } from './percentage/percentage.component';

const routes: Routes = [
    { 
      path: '',
      component: MarketingComponent,
      children: [], 
    },
    { path: 'promotions', component: PromotionsComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'percentage', component: PercentageComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class MarketingRoutingModule { }
