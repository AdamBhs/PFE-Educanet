import { Component, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { TextInputModule } from 'ng-devui/text-input';
import { delay, of } from 'rxjs';
import { Router } from '@angular/router';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent implements OnInit {
  customerCode!:any;
  validCode = false;
  existCustomerCard = ['123', '124'];

  verticalLayout: FormLayout = FormLayout.Vertical;

  constructor(
    private backendService: BackendCallsService
    ) {}

  ngOnInit(): void {
    
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
          
          console.log(data);
        }
      )

    } else {
      this.validCode = false;
    }
  }
}
