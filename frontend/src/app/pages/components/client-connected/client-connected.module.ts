import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/shared.module'
import { OperationsListenerComponent } from './client-connected.component';

@NgModule({
  declarations: [OperationsListenerComponent],
  imports: [
    SharedModule,
  ],
  exports: [OperationsListenerComponent],
})
export class clientConnectModule { }