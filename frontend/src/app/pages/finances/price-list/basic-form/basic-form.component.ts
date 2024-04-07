import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormLayout } from 'ng-devui';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {

  constructor() { }

  projectFormData = {
    ArticleType: '',
    ArticleName: '',
    ArticlePrice: '',
    Submited: false,
  };

  verticalLayout: FormLayout = FormLayout.Vertical;

  ArticleOptions = [
    { id: '1', name: 'Abbigliamento' },
    { id: '2', name: 'Biancheria casa' },
    { id: '3', name: 'Capi in Pelle' },
    { id: '4', name: 'Sartoria' },
  ];

  getValue(value) {
  }

  everyRange(range) {
    return range.every((_) => !!_);
  }

  isFloat(value) {
    const regex = /^[+]?[1-9]*\.?[0-9]+$/;
    
    return of(regex.test(value)).pipe(delay(500));
  }

  isString(value) {
    const regex = /^[a-zA-Z]+$/;

    return of(regex.test(value)).pipe(delay(500));
  }
  

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      this.projectFormData.Submited = true;
    } else {
      // error tip
    }
  }
}
