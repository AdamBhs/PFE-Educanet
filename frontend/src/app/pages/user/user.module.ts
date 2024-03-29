import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { CenterComponent } from './center/center.component';
import { SettingsComponent } from './settings/settings.component';
import { BasicSettingsComponent } from './settings/basic-settings/basic-settings.component';
import { SplitterModule, TagsInputModule } from 'ng-devui';
import { SelectModule } from 'ng-devui/select';
import { MessageNotificationComponent } from './settings/message-notification/message-notification.component';
import { SecuritySettingsComponent } from './settings/security-settings/security-settings.component';

@NgModule({
  declarations: [
    UserComponent,
    CenterComponent,
    SettingsComponent,
    BasicSettingsComponent,
    MessageNotificationComponent,
    SecuritySettingsComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    TagsInputModule,
    SplitterModule,
    SelectModule
  ],
})
export class UserModule { }
