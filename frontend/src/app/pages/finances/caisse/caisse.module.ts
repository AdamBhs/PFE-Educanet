import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DataTableModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CaisseComponent } from './caisse.component';
import { BasicFormCaisModule } from './basic-form/basic-form.module';



@NgModule({
  declarations: [
    CaisseComponent
  ],
  imports: [
    SharedModule,
    BasicFormCaisModule,
    DataTableModule,
  ],
  exports: [
    CaisseComponent
  ]
})
export class CaisseModule { }
