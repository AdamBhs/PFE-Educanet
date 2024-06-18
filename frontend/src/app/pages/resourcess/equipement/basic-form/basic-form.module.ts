import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form.component';
import { SelectModule, CheckBoxModule, DatepickerModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import {NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    CheckBoxModule,
    DatepickerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), 
    }),
    
  ],
  exports: [BasicFormComponent],
})
export class BasicFormEquipModule {}
