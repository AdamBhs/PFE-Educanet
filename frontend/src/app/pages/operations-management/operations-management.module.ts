import { NgModule } from '@angular/core';

import { OperationsManagementRoutingModule } from './operations-management-routing.module';
import { OperationsManagementComponent } from './operations-management.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { OperationsComponent } from './operations/operations.component';

import { BasicFormOperModule } from './operations/basic-form/basic-form.module';
import { NotificationModule } from './notifications/notifications.module';


@NgModule({
  declarations: [
    OperationsManagementComponent,
    OperationsComponent,
  ],
  imports: [
    SharedModule,
    OperationsManagementRoutingModule,
    BasicFormOperModule,
    NotificationModule
  ],
  providers: [],
})
export class OperationsManagementModule { }
