import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { DataTableModule } from 'ng-devui';


import { EquipementComponent } from './equipement.component';
import { BasicFormEquipModule } from './basic-form/basic-form.module';


@NgModule({
  declarations: [
    EquipementComponent,
  ],
  imports: [
    SharedModule,
    BasicFormEquipModule
  ],
  exports: [
    EquipementComponent
  ]
})
export class EquipementModule { }
