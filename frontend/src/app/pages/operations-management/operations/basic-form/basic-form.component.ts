import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormLayout } from 'ng-devui';
import { BasicListComponent } from './basic-list/basic-list.component';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  @ViewChild(BasicListComponent) basicList: BasicListComponent;
  projectFormData = {
    numAgence: null,
    AgencyName: null,
    intervalTime: [null, null],
    operationCycleTime: [null, null],
  };

  verticalLayout: FormLayout = FormLayout.Vertical;

  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];
  
  isTimeNull(arr): boolean {
    return arr[0] === null && arr[1] === null;
  }

  onSelectChange(value) {
    this.projectFormData.numAgence = value["id"];
    this.basicList.getNumAgence(value["id"]);
    this.basicList.getList();
  }

  getProjectFormData() {
    this.basicList.getProjectFormData(this.projectFormData);
    this.basicList.getListByDate();
    
  }
  

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid && !this.isTimeNull(this.projectFormData.intervalTime)) {
      this.getProjectFormData();
    } else {
      // error tip
    }
  }
}
