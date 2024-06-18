import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form.component';
import { SelectModule, CheckBoxModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DateRangePickerModule } from 'src/app/pages/components/range-picker/date-picker.module';
import { BasicListModule } from './basic-list/basic-list.module';

@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    CheckBoxModule,
    BasicListModule,
    DateRangePickerModule
  ],
  exports: [BasicFormComponent],
})
export class BasicFormPromCustomerModule {}
