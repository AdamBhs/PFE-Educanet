import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormLayout } from 'ng-devui';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';
import { ListDataService } from './basic-list/list-data.service';
import { BasicListComponent } from './basic-list/basic-list.component';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent{
  @ViewChild(BasicListComponent) basicList: BasicListComponent;

  intervalTime: [any, any];
  existCustomerCard!:any;
  listCustomerArchive: any[] = [];
  isDateNull: any = false;

  projectFormData = {
    CustomerCode: '',
    numAgence: null,
    nameAgence: null,
    intervalTime: [null, null],
    operationCycleTime: [null, null],
    Submited: false
  };

  verticalLayout: FormLayout = FormLayout.Vertical;

  constructor(
    private backendService: BackendCallsService,
    private listDataService: ListDataService
  ) {}

  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];

  onSelectionChange(data) {
    this.projectFormData.numAgence = data["id"];
    this.backendService.getCustomersByAgence(this.projectFormData.nameAgence).subscribe(
      (customers) => {
        this.existCustomerCard = customers.map(customer => customer.codeClient.toString());
      }
    )
  }
  
  checkCode(value) {
    let res = false;
    if (this.existCustomerCard.indexOf(value) !== -1) {
      res = true;
    }
    return of(res).pipe(delay(500));
  }

  isOperationCycleTimeNull(): boolean {
    this.isDateNull = !this.projectFormData.operationCycleTime.every(element => element === null);

    return !this.projectFormData.operationCycleTime.every(element => element === null);
  }


  submitProjectForm({ valid, directive, data, errors }) {
    if (valid && this.isDateNull) {
      this.projectFormData.Submited = true;
      this.listDataService.getAttributeData(this.projectFormData);
      if (this.basicList) {
        this.basicList.reset();  
      }
    } else {
      this.projectFormData.Submited = false;
    }
  }
}
