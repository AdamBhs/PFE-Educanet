import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { PriceListComponent } from './price-list/price-list.component';
import { CaisseComponent } from './caisse/caisse.component';
import { SellPointsComponent } from './sell-points/sell-points.component';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  { 
    path: '',
    component: SalesComponent,
    children: [],
  },
  { path: 'price-list', component: PriceListComponent },
  { path: 'caisse', component: CaisseComponent },
  { path: 'sell-points', component: SellPointsComponent },
  { path: 'agency', component: AgencyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
