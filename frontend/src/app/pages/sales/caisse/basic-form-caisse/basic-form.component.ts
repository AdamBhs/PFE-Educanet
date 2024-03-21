import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormLayout } from 'ng-devui';

@Component({
  selector: 'da-basic-form-caisse',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormCaisseComponent {
  projectFormData = {
    projectOwner: null,
    AgencyName: null,
    projectCycleTime: [null, null],
  };

  

  verticalLayout: FormLayout = FormLayout.Vertical;

  existCustomerCard = ['123', '124']; // check if the customer Code exist or not

  

  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];

  getValue(value) {
    console.log(value);
  }

  everyRange(range) {
    return range.every((_) => !!_);
  }

  checkName(value) {
    let res = false;
    if (this.existCustomerCard.indexOf(value) !== -1) {
      res = true;
    }
    return of(res).pipe(delay(500));
  }

  validateDate(value): Observable<string | null> {
    let message = null;
    
      
    return of(message).pipe(delay(300));
  }

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      
    } else {
      // error tip
    }
  }
}
