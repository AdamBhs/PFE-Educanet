import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form.component';
import { SelectModule, CheckBoxModule, EditableSelectModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { BasicListModule } from './basic-list/basic-list.module';
import { DateRangePickerModule } from 'src/app/pages/components/range-picker/date-picker.module';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    CheckBoxModule,
    BasicListModule,
    DateRangePickerModule,
    EditableSelectModule
  ],
  exports: [BasicFormComponent],
})
export class BasicFormPromModule {}
