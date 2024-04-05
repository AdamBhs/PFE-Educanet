import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcessComponent } from './resourcess.component';
import { AgencyComponent } from './agency/agency.component';
import { LaboratoireComponent } from './laboratoire/laboratoire.component';
import { EquipementComponent } from './equipement/equipement.component';

const routes: Routes = [{ path: '', component: ResourcessComponent, children: [] },
                        { path: 'agency', component: AgencyComponent },
                        { path: 'laboratoire', component: LaboratoireComponent },
                        { path: 'equipement', component: EquipementComponent }
                  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcessRoutingModule { }
