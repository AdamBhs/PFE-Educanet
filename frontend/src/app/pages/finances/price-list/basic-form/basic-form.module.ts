import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form.component';
import { SelectModule, CheckBoxModule, DatepickerModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ListDataService } from './list-data.service';

@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    CheckBoxModule,
    DatepickerModule,
  ],
  exports: [BasicFormComponent],
  providers: [ListDataService],
})
export class BasicFormModule {}
