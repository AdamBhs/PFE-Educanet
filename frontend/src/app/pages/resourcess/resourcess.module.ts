import { NgModule } from '@angular/core';

import { ResourcessRoutingModule } from './resourcess-routing.module';
import { ResourcessComponent } from './resourcess.component';
import { SharedModule } from 'src/app/@shared/shared.module';

import { AgencyModule } from './agency/agency.module';
import { EquipementModule } from './equipement/equipement.module';


@NgModule({
  declarations: [
    ResourcessComponent,
  ],
  imports: [
    SharedModule,
    ResourcessRoutingModule,
    AgencyModule,
    EquipementModule
  ]
})
export class ResourcessModule { }
