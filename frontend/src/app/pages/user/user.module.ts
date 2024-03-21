import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CenterComponent } from './center/center.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    UserComponent,
    CenterComponent,
    SettingsComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  providers: [],
})
export class UserModule { }
