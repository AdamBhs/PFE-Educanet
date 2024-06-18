import { NgModule } from '@angular/core';

import { OperationsManagementRoutingModule } from './operations-management-routing.module';
import { OperationsManagementComponent } from './operations-management.component';
import { SharedModule } from 'src/app/@shared/shared.module';

import { NotificationModule } from './notifications/notifications.module';
import { OperationsModule } from './operations/operations.module';


@NgModule({
  declarations: [
    OperationsManagementComponent,
  ],
  imports: [
    SharedModule,
    OperationsManagementRoutingModule,
    NotificationModule,
    OperationsModule
  ],
  providers: [],
})
export class OperationsManagementModule { }
