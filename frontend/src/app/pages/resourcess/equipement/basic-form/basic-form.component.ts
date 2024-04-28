import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormLayout } from 'ng-devui';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {

  projectFormData = {
    AgencyName: null,
    Submited: false
  };


  verticalLayout: FormLayout = FormLayout.Vertical;
  
  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];





  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      this.projectFormData.Submited = true;
      
      
    } else {
      // error tip
    }
  }
}
