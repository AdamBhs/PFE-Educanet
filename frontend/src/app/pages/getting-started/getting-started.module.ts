import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { SampleComponent } from './sample/sample.component';
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { DataTableModule } from 'ng-devui';

@NgModule({
  declarations: [GettingStartedComponent, SampleComponent],
  imports: [
    SharedModule,
    DataTableModule,
    GettingStartedRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), 
    }),
    ],
  providers: [],
})
export class GettingStartedModule {}
