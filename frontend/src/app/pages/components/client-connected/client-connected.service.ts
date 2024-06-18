import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsSseService implements OnDestroy {
  private eventSource: EventSource;
  private operationsSubject = new Subject<number>();

  constructor(private backendService: BackendCallsService) {
    
    this.eventSource = new EventSource('http://localhost:8080/getOperationsOfToday');
    
    this.eventSource.onmessage = (event) => {
      const operationsCount = parseInt(event.data, 10);
      this.operationsSubject.next(operationsCount); // Emit the current operations count
    };

    this.eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      this.operationsSubject.error(error); // Handle errors
    };
  }

  getOperationsCount(): Observable<number> {
    return this.operationsSubject.asObservable(); // Return as observable for subscription
  }

  ngOnDestroy() {
    if (this.eventSource) {
        this.eventSource.close(); // Close the EventSource when the service is destroyed
    }
  }
}