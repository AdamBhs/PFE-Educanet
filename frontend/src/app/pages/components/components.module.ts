import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateSelectComponent } from './date-select/date-select.component';
import { DatepickerModule } from 'ng-devui/datepicker';


@NgModule({
  declarations: [DateSelectComponent],
  imports: [
    CommonModule, DatepickerModule, FormsModule
  ],
  exports: [DateSelectComponent]
})
export class ComponentsModule { }
