import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/@shared/shared.module';
import { GettingStartedComponent } from './getting-started.component';
import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { SampleModule } from './sample/sample.module';

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [
    SharedModule,
    SampleModule,
    GettingStartedRoutingModule,
    ],
  providers: [],
})
export class GettingStartedModule {}
