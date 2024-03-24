import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomerManagementComponent } from "./customer-management.component";
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { TotalCustomersComponent } from './total-customers/total-customers.component';
import { CustomerArchiveComponent } from './customer-archive/customer-archive.component';

//Configure the module route here.
const routes: Routes = [
  {
    path: "",
    component: CustomerManagementComponent,
    children: [],
  },
  { path: 'customer-card', component: CustomerCardComponent },
  { path: 'total-customers', component: TotalCustomersComponent },
  { path: 'customer-archive', component: CustomerArchiveComponent },
  { path: 'customer-card/:id', component: CustomerCardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerManagementRoutingModule {}