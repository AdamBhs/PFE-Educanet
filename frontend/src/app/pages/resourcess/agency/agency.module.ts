import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/@shared/shared.module';
import { DataTableModule } from 'ng-devui';
import { AgencyComponent } from './agency.component';
import { TableModule } from './table/table.module';


@NgModule({
  declarations: [
    AgencyComponent,
  ],
  imports: [
    SharedModule,
    TableModule,
  ],
  exports: [
    AgencyComponent
  ]
})
export class AgencyModule { }
