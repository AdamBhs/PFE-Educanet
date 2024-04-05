import { NgModule } from '@angular/core';

import { OperationsManagementRoutingModule } from './operations-management-routing.module';
import { OperationsManagementComponent } from './operations-management.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { OperationsComponent } from './operations/operations.component';

import { BasicFormOperModule } from './operations/basic-form/basic-form.module';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [
    OperationsManagementComponent,
    OperationsComponent,
    NotificationsComponent,
  ],
  imports: [
    SharedModule,
    OperationsManagementRoutingModule,
    BasicFormOperModule
  ],
  providers: [],
})
export class OperationsManagementModule { }
