import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule, ButtonModule } from 'ng-devui';
import { SharedModule } from 'src/app/@shared/shared.module';
import { SampleComponent } from './sample.component';
import { TableModule } from '../../resourcess/agency/table/table.module';
import { DataTableModule } from 'ng-devui';
import { NgxEchartsModule } from 'ngx-echarts';
import { clientConnectModule } from '../../components/client-connected/client-connected.module';

@NgModule({
  declarations: [SampleComponent],
  imports: [
    SharedModule,
    FormsModule,
    SelectModule,
    DataTableModule,
    ButtonModule,
    clientConnectModule,
    TableModule,
    NgxEchartsModule.forRoot({
        echarts: () => import('echarts'), 
      }),
  ],
  exports: [SampleComponent],
})
export class SampleModule {}
