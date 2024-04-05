import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcessRoutingModule } from './resourcess-routing.module';
import { ResourcessComponent } from './resourcess.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DataTableModule } from 'ng-devui';




import { AgencyComponent } from './agency/agency.component';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { EquipementComponent } from './equipement/equipement.component';


@NgModule({
  declarations: [
    ResourcessComponent,
    AgencyComponent,
    LaboratoireComponent,
    EquipementComponent
  ],
  imports: [
    SharedModule,
    ResourcessRoutingModule,
    DataTableModule
  ]
})
export class ResourcessModule { }
