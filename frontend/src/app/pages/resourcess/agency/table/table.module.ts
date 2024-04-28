import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule, CheckBoxModule, DatepickerModule, DataTableModule, ButtonModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DatatableDemoBasicComponent } from './table.component';

@NgModule({
  declarations: [DatatableDemoBasicComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    DataTableModule,
    ButtonModule
  ],
  exports: [DatatableDemoBasicComponent],
})
export class TableModule {}
