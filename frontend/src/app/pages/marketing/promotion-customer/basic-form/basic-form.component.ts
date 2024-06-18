import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FormLayout } from 'ng-devui';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';
import { BasicListComponent } from './basic-list/basic-list.component';

@Component({
  selector: 'da-basic-form',
  templateUrl: './basic-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  @ViewChild(BasicListComponent) basicList: BasicListComponent;

  constructor (private backendService: BackendCallsService) {
  }

  existCustomerCard!:any;

  projectFormData = {
    numAgence: '',
    customerCode: '',
    newPrice: '',
    agencyName: '',
    articleName: '',
    category: '',
    intervalTime: [null, null],
    operationCycleTime: [null, null],
  };

  isCustomerCode = true;
  displayArticleName = true;
  verticalLayout: FormLayout = FormLayout.Vertical;
   
  ArticleOptions = [
    { id: '1', name: 'Abbigliamento'},
    { id: '2', name: 'BiancheriaCasa'},
    { id: '3', name: 'CapiInPelle'},
    { id: '4', name: 'Sartoria'},
  ];

  AgencyOptions = [
    { id: '1', name: 'Carpi' },
    { id: '2', name: 'Bazzano' },
    { id: '3', name: 'Modena' },
    { id: '4', name: 'Soliera' },
  ];

  articleNames = [];

  valuechangeAgence(value) {
    this.basicList.getNumAgence(value["id"]); 
    this.projectFormData.numAgence = value["id"];
    this.backendService.getCustomersByAgence(value["name"]).subscribe(
      (customers) => {
        this.existCustomerCard = customers.map(customer => customer.codeClient.toString());
        this.isCustomerCode = false;
      }
    )
  }

  isCategoryFilled(value) {
    if(this.projectFormData.agencyName !== '' && this.projectFormData.category !== '') {
      this.displayArticleName = false;
      this.backendService.getArticlesByCategorie(this.projectFormData.category).subscribe(
        (articles) => {
          this.articleNames = articles.map(article => ({
            id: article.idArticle,
            name: article.articleName
          }))
        },
        (error) => {
          console.log("error : ", error);
        }
      )
    }
  }

  getValue(value) {
    console.log(value);
  }

  checkCode(value) {
    let res = false;
    if (this.existCustomerCard.indexOf(value) !== -1) {
      res = true;
    }
    return of(res).pipe(delay(500));
  }

  isTimeNull(arr): boolean {
    return arr[0] === null && arr[1] === null;
  }

  isFloat(value) {
    const regex = /^[+]?[1-9]*\.?[0-9]+$/;
    
    return of(regex.test(value)).pipe(delay(500));
  }

  addPromotionForCustomer() {
    this.backendService.addPromotionForCustomer(this.projectFormData).subscribe(
      (response) => {
        console.log("valid: ", response);
        this.basicList.reset();
      },
      (error) => {
        console.log("error : ", error);
      }
    )
  }

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid && !this.isTimeNull(this.projectFormData.intervalTime)) {
      console.log(this.projectFormData)
      this.addPromotionForCustomer();
    } else {
      // error tip
    }
  }
}
