import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'getting-started',
        loadChildren: () =>
          import('./getting-started/getting-started.module').then(
            (m) => m.GettingStartedModule
          )
      },
      { path: 'customer-management',
       loadChildren: () =>
        import('./customer-management/customer-management.module').then(
          m => m.CustomerManagementModule
          )
      },
      { path: 'marketing', loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule) },
      { path: 'operations-management', loadChildren: () => import('./operations-management/operations-management.module').then(m => m.OperationsManagementModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'resourcess', loadChildren: () => import('./resourcess/resourcess.module').then(m => m.ResourcessModule) },
      { path: 'finances', loadChildren: () => import('./finances/finances.module').then(m => m.FinancesModule) },
      {
        path: '',
        redirectTo: 'getting-started',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'getting-started'
      }
    ]
  },
  
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
