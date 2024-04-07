import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form.component';
import { SelectModule, CheckBoxModule, DatepickerModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { BasicListModule } from './basic-list/basic-list.module';

@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    CheckBoxModule,
    DatepickerModule,
    BasicListModule
  ],
  exports: [BasicFormComponent],
})
export class BasicFormCaisModule {}
