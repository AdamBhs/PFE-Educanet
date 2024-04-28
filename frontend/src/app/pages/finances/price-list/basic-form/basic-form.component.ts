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
export class BasicFormComponent implements OnInit{
  @ViewChild(BasicListComponent) basicList: BasicListComponent;

  constructor(
    private backendService: BackendCallsService,
    private listDataService: ListDataService
  ) { }

  listArticleNames:any[] = [];

  projectFormData = {
    Category: '',
    ArticleName: '',
    ArticlePrice: '',
    Submited: false,
  };
   
  private firstCall: boolean = true;
  verticalLayout: FormLayout = FormLayout.Vertical;

  ArticleOptions = [
    { id: '1', name: 'Abbigliamento'},
    { id: '2', name: 'BiancheriaCasa'},
    { id: '3', name: 'CapiInPelle'},
    { id: '4', name: 'Sartoria'},
  ];

  ngOnInit(): void {
    this.getArticlesNames();
    
  }

  getArticlesNames() {
    this.backendService.getArticles().subscribe(
      (articles) => {
        this.listArticleNames = articles.map(article => article.articleName.toString());
      }
    )
  }

  onSelectionChange() {
    this.listDataService.getCategory(this.projectFormData.Category);

    if (!this.firstCall) {
      this.basicList.reset();
    } else {
      this.firstCall = false;
    }
  }


  isFloat(value) {
    const regex = /^[+]?[1-9]*\.?[0-9]+$/;
    
    return of(regex.test(value)).pipe(delay(500));
  }

  isString(value) {
    const regex = /^[a-zA-Z\s]+$/;

    return of(regex.test(value)).pipe(delay(500));
  }

  addArticle() {
    this.backendService.addArticle(
      this.projectFormData.ArticleName,
      this.projectFormData.ArticlePrice,
      this.projectFormData.Category
    ).subscribe(
      (response) => {
        console.log('Article added successfully:', response);
        this.basicList.reset(); // Reset the list if needed
      },
      (error) => {
        console.error('Error adding article:', error);
        // Display error to user if necessary
      }
    );
  }

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      this.projectFormData.Submited = true;
      this.listDataService.getAttributeData(this.projectFormData);
      
      this.addArticle();
      this.listDataService.listArticleNames = this.listArticleNames;
      
      if (this.basicList) {
        this.basicList.reset();
        
      }
    } else {
      // error tip
    }
  }
}
