import { Component, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { delay, of } from 'rxjs';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent implements OnInit {
  customerCode!:any;
  validCode = false;
  existCustomerCard!:any;
  customer!: Customer

  verticalLayout: FormLayout = FormLayout.Vertical;

  constructor(
    private backendService: BackendCallsService
  ) {
    this.customer = {
      codeClient: null,
      name: '',
      numTelp: '',
      pinCode: null,
      agence: { numeroAgence: null, agenceName: '', etat: '' },
    };
  }

  ngOnInit(): void {
    this.backendService.getCustomers().subscribe(
      (customers) => {
        this.existCustomerCard = customers.map(customer => customer.codeClient.toString());
      }
    )
    setTimeout(() => {
      console.log(this.backendService.getCustomers());
    }, 1000);
  }


  checkCode(value) {
    let res = false;
    if (this.existCustomerCard.indexOf(value) !== -1) {
      res = true;
    }
    
    return of(res).pipe(delay(500));
  }


  submitForm({ valid, directive, data, errors }) {
    if (valid) {
      this.validCode = true;
      
      this.backendService.getCustomerCode(this.customerCode).subscribe(
        (data) => {
          this.customer.codeClient = data["codeClient"];
          this.customer.agence = data["agence"];
          this.customer.name = data["name"];
          this.customer.numTelp = data["numTelp"];
          this.customer.pinCode = data["pinCode"];
        }
      )
      
      
    } else {
      this.validCode = false;
    }
  }
}
