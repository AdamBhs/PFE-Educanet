import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicFormCaisseComponent } from './basic-form.component';
import { SelectModule, CheckBoxModule, DatepickerModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [BasicFormCaisseComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    CheckBoxModule,
    DatepickerModule,
    
  ],
  exports: [BasicFormCaisseComponent],
})
export class BasicFormCaisseModule {}
