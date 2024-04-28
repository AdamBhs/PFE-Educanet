import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { DataTableModule } from 'ng-devui';



import { BasicFormNotifiModule } from './basic-form/basic-form.module';
import { NotificationsComponent } from './notifications.component';


@NgModule({
  declarations: [
    NotificationsComponent,
  ],
  imports: [
    SharedModule,
    BasicFormNotifiModule
  ],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationModule { }
