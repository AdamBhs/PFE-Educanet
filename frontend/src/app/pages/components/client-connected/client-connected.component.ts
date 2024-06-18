import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { OperationsSseService } from './client-connected.service';

@Component({
  selector: 'd-client-connected',
  template: `
    <div>
      <h2>Operations of Today: {{ operationsCount }}</h2>
    </div>
  `,
})
export class OperationsListenerComponent implements OnInit, OnDestroy {
  private operationsSubscription: Subscription;
  public operationsCount = 0;

  constructor(private operationsSseService: OperationsSseService) {}

  ngOnInit() {
    this.operationsSubscription = this.operationsSseService.getOperationsCount().subscribe(
      (count) => {
        this.operationsCount = count; // Update the component when new data is received
      },
      (error) => {
        console.error('SSE error:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.operationsSubscription) {
        this.operationsSubscription.unsubscribe(); // Unsubscribe when component is destroyed
    }
  }
}