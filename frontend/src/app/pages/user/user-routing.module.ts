import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CenterComponent } from './center/center.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { 
   path: '',
   component: UserComponent,
   children: [
      { path: 'settings', component: SettingsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
