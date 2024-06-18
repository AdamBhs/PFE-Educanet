import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { FormLayout } from 'ng-devui';
import { delay, of } from 'rxjs';
import { BasicListComponent } from './basic-list/basic-list.component';
import { ListDataService } from './basic-list/list-data.service';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  @ViewChild(BasicListComponent) basicList: BasicListComponent;
  
  constructor(
    private backendService: BackendCallsService,
    private listDataService: ListDataService
  ) { }

  projectFormData = {
    numAgence: '',
    AgencyName: null,
    title: '',
    description: '',
    Submited: false
  };

  private firstCall: boolean = true;
  verticalLayout: FormLayout = FormLayout.Vertical;
  
  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];
  
  onSelectionChange(data) {
    this.projectFormData.numAgence = data["id"];
    this.listDataService.getNumAgence(data["id"]);
   

    if (!this.firstCall) {
      this.basicList.reset();
    } else {
      this.firstCall = false;
    }
  }

  addNotification() {
    this.backendService.addNotification(
     this.projectFormData["numAgence"],
     this.projectFormData["description"], 
     this.projectFormData["title"]
    ).subscribe(
      (res) => {
        console.log("valid : ", res);
      },
      (err) => {
        console.log("error: ", err);
      }
    );

  
  }

  isString(value) {
    const regex = /^[a-zA-Z\s]+$/;

    return of(regex.test(value)).pipe(delay(500));
  }

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      this.projectFormData.Submited = true;
      this.addNotification();
      
      
    } else {
      // error tip
    }
  }
}
