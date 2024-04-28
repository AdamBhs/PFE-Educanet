import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcessRoutingModule } from './resourcess-routing.module';
import { ResourcessComponent } from './resourcess.component';
import { SharedModule } from 'src/app/@shared/shared.module';

import { AgencyModule } from './agency/agency.module';
import { LaboratoireModule } from './laboratoire/laboratoire.module';
import { EquipementModule } from './equipement/equipement.module';


@NgModule({
  declarations: [
    ResourcessComponent,
  ],
  imports: [
    SharedModule,
    ResourcessRoutingModule,
    AgencyModule,
    LaboratoireModule,
    EquipementModule
  ]
})
export class ResourcessModule { }
