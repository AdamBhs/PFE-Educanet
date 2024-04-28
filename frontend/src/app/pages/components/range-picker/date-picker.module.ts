import { NgModule } from '@angular/core';
import { DatepickerModule, DatepickerProModule } from 'ng-devui';
import { RangeTypepickerProComponent } from './date-picker.component';
import { SharedModule } from 'src/app/@shared/shared.module'

@NgModule({
  declarations: [RangeTypepickerProComponent],
  imports: [
    SharedModule,
    DatepickerProModule,
    DatepickerModule
  ],
  exports: [RangeTypepickerProComponent],
})
export class DateRangePickerModule { }