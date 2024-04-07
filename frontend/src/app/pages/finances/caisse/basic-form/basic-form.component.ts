import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormLayout } from 'ng-devui';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  firstDatefinal?: any;
  secondDatefinal?: any;
  intervalTime: [any, any];
  projectFormData = {
    AgencyName: null,
    projectCycleTime: [null, null],
    Submited: false
  };

  month = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
  }

  verticalLayout: FormLayout = FormLayout.Vertical;
  
  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];

  getValue(value) {
    let firstDateList = this.projectFormData.projectCycleTime[0].toString().split(' ');
    this.firstDatefinal = firstDateList[3] +'-'+ this.month[firstDateList[1]] +'-'+ firstDateList[2];
    let secondDateList = this.projectFormData.projectCycleTime[1].toString().split(' ');
    this.secondDatefinal = secondDateList[3] +'-'+ this.month[secondDateList[1]] +'-'+ secondDateList[2];
      
    this.intervalTime = [this.firstDatefinal, this.secondDatefinal]; 
  
  }

  everyRange(range) {
    return range.every((_) => !!_);
  }


  validateDate(value): Observable<string | null> {
    let message = null;
    
    message = {
      'en-us':
        'The task queue on the current execution day (Tuesday) is full.',
    };
      
    return of(message).pipe(delay(300));
  }

  isProjectCycleTimeNull(): boolean {
    return !this.projectFormData.projectCycleTime.every(element => element === null);
  }

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      this.projectFormData.Submited = true;
      
      
    } else {
      // error tip
    }
  }
}
