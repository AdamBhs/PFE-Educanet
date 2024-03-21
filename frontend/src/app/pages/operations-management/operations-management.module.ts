import { NgModule } from '@angular/core';

import { OperationsManagementRoutingModule } from './operations-management-routing.module';
import { OperationsManagementComponent } from './operations-management.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { OperationsComponent } from './operations/operations.component';
import { EquipementComponent } from './equipement/equipement.component';
import { ProductionComponent } from './production/production.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { BasicFormOperModule } from './operations/basic-form/basic-form.module';


@NgModule({
  declarations: [
    OperationsManagementComponent,
    OperationsComponent,
    EquipementComponent,
    ProductionComponent,
    LaboratoryComponent
  ],
  imports: [
    SharedModule,
    OperationsManagementRoutingModule,
    BasicFormOperModule
  ],
  providers: [],
})
export class OperationsManagementModule { }
