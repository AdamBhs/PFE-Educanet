import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { OperationsComponent } from './operations.component';
import { BasicFormOperModule } from './basic-form/basic-form.module';





@NgModule({
  declarations: [
    OperationsComponent,
  ],
  imports: [
    SharedModule,
    BasicFormOperModule
  ],
  exports: [
    OperationsComponent
  ]
})
export class OperationsModule { }
