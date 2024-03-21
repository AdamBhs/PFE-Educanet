import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/@shared/shared.module";
import { CustomerManagementComponent } from "./customer-management.component";
import { CustomerManagementRoutingModule } from "./customer-management-routing.module";
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { TotalCustomersComponent } from './total-customers/total-customers.component';
import { CustomerArchiveComponent } from './customer-archive/customer-archive.component';
import { PieChartModule } from './total-customers/pie-chart/pie-chart.module';
import { DevUIModule } from 'ng-devui';
import { DatepickerModule } from 'ng-devui/datepicker';
import { ComponentsModule } from '../components/components.module';
import { BasicFormModule } from './customer-archive/basic-form/basic-form.module';

@NgModule({
  declarations: [CustomerManagementComponent, CustomerCardComponent, TotalCustomersComponent, CustomerArchiveComponent],
  imports: [SharedModule,ComponentsModule, CustomerManagementRoutingModule, PieChartModule, DevUIModule, DatepickerModule, BasicFormModule], 
  providers: [],
})
export class CustomerManagementModule {}