import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { FormLayout } from 'ng-devui';
import { ListDataService } from './basic-list/list-data.service';
import { BasicListComponent } from './basic-list/basic-list.component';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  @ViewChild(BasicListComponent) basicData: BasicListComponent;

  constructor(
    private backendService: BackendCallsService,
    private listDataService: ListDataService
  ) { }

  intervalTime: [any, any];
  isDateNull: any = false;
  private firstCall: boolean = true;

  projectFormData = {
    numAgence: null,
    nameAgence: '',
    intervalTime: [null, null],
    operationCycleTime: [null, null],
    Submited: false
  };

  verticalLayout: FormLayout = FormLayout.Vertical;
  
  AgencyOptions = [
    { id: '1', name: 'Bazzano' },
    { id: '2', name: 'Carpi' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];

  onSelectionChange(data) {
    this.projectFormData.numAgence = data["id"];
    this.listDataService.getNumAgence(data["id"]);

    if (!this.firstCall) {
      this.basicData.reset();
    } else {
      this.firstCall = false;
    }
  }

  isOperationCycleTimeNull(): boolean {
    this.isDateNull = !this.projectFormData.operationCycleTime.every(element => element === null);
    console.log(this.isDateNull);
    return !this.projectFormData.operationCycleTime.every(element => element === null);
  }


  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      this.projectFormData.Submited = true;
      this.listDataService.getAttributeData(this.projectFormData);
      console.log(this.projectFormData.operationCycleTime)

      if (this.basicData) {
        this.basicData.reset();  
      }
    } else {
      
    }
  }
}
