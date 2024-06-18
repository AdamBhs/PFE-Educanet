import { NgModule } from '@angular/core';

import { DataTableModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { BasicFormPromModule } from './basic-form/basic-form.module';
import { PromotionsComponent } from './promotions.component';



@NgModule({
  declarations: [
    PromotionsComponent
  ],
  imports: [
    SharedModule,
    BasicFormPromModule,
    DataTableModule,
  ],
  exports: [
    PromotionsComponent
  ]
})
export class PromotionsModule { }
