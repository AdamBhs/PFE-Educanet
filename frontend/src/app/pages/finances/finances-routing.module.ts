import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './finances.component';
import { PriceListComponent } from './price-list/price-list.component';
import { CaisseComponent } from './caisse/caisse.component';

const routes: Routes = [
        { path: '', component: FinancesComponent },
        { path: 'price-list', component: PriceListComponent },
        { path: 'caisse', component: CaisseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class FinancesRoutingModule { }
