import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsManagementComponent } from './operations-management.component';
import { OperationsComponent } from './operations/operations.component';
import { EquipementComponent } from './equipement/equipement.component';
import { ProductionComponent } from './production/production.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';

const routes: Routes = [{ path: '', component: OperationsManagementComponent, children: [] }, { path: 'operations', component: OperationsComponent }, { path: 'equipement', component: EquipementComponent }, { path: 'production', component: ProductionComponent }, { path: 'laboratory', component: LaboratoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsManagementRoutingModule { }
