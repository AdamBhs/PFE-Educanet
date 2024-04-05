import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsManagementComponent } from './operations-management.component';
import { OperationsComponent } from './operations/operations.component';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes = [{ path: '', component: OperationsManagementComponent, children: [] },
  { path: 'operations', component: OperationsComponent },
  { path: 'notifications', component: NotificationsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsManagementRoutingModule { }
