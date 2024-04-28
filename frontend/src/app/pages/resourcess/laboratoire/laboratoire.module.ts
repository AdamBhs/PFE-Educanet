import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { DataTableModule } from 'ng-devui';

import { LaboratoireComponent } from './laboratoire.component';
import { BasicFormLabModule } from './basic-form/basic-form.module';


@NgModule({
  declarations: [
    LaboratoireComponent,
  ],
  imports: [
    SharedModule,
    BasicFormLabModule
  ],
  exports: [
    LaboratoireComponent
  ]
})
export class LaboratoireModule { }
