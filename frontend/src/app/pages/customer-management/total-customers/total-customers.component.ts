import { Component, OnInit } from '@angular/core';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Component({
  selector: 'app-total-customers',
  templateUrl: './total-customers.component.html',
  styleUrls: ['./total-customers.component.scss'],
})
export class TotalCustomersComponent implements OnInit {
  transformedData: any[] = [];
  constructor(private backendService: BackendCallsService) {

  }

  ngOnInit(): void {
    this.backendService.getTotalCustomersByAgence().subscribe(
      (agences) => {
        // Transform the data
        this.transformedData = agences.map(agence => {
          return { value: agence.num, name: agence.agence_name };
        });
      }
    );
  }
}
