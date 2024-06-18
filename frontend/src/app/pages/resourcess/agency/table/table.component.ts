import { Component, OnInit } from '@angular/core';
import { TableWidthConfig } from 'ng-devui/data-table';
import { BackendCallsService } from 'src/app/@core/services/backend-calls.service';

export interface SourceType {
  Name: string;
  Etat: string;
}

@Component({
  selector: 'd-basic',
  templateUrl: './table.component.html'
})

export class DatatableDemoBasicComponent implements OnInit {

  constructor(private backendService: BackendCallsService) {

  }

  basicDataSource: Array<SourceType>;
  dataTableOptions = {
    columns: [
      {
        field: 'Name',
        header: 'Name',
        fieldType: 'text'
      },
      {
        field: 'Etat',
        header: 'Etat',
        fieldType: 'text'
      },
    ]
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: 'Name',
      width: '50px'
    },
    {
      field: 'Etat',
      width: '50px'
    }
  ];

  getTableAgences() {
    this.backendService.getTableAgences().subscribe(
      (agences) => {
        this.basicDataSource = agences.map(agence => {
          return {Name: agence.Name, Etat: agence.Etat}
        });
      }
    )
  }

  changeEtat(id, currentEtat) {
    let newEtat = (currentEtat === 'Connected') ? 'Disconnected' : 'Connected';

     this.backendService.updateEtatAgence(id, newEtat).subscribe(
      response => {
        console.log("Update successful:", response);
        this.getTableAgences();
      },
      error => {
        console.error("Update failed:", error);
       
      }
    );

    
  }

  ngOnInit() {
    this.getTableAgences();
  }
}