import {
    Component,
    Input,
  } from '@angular/core';
  
  @Component({
    selector: 'd-range-type-picker',
    templateUrl: './date-picker.component.html',
  })
  export class RangeTypepickerProComponent {
    firstDatefinal?: any;
    secondDatefinal?: any;
    @Input("ProjectFormData") projectFormData?:any;

    intervalTime: [null, null];
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

    constructor() {
  
    }
    
    everyRange(range) {
        return range.every((_) => !!_);
      }
    
    getValue() {
      if (this.projectFormData.operationCycleTime[0] == null &&
        this.projectFormData.operationCycleTime[1] == null ) 
        {
          return;
        }
      let firstDateList = this.projectFormData.operationCycleTime[0].toString().split(' ');
      this.firstDatefinal = firstDateList[3] +'-'+ this.month[firstDateList[1]] +'-'+ firstDateList[2];
      let secondDateList = this.projectFormData.operationCycleTime[1].toString().split(' ');
      this.secondDatefinal = secondDateList[3] +'-'+ this.month[secondDateList[1]] +'-'+ secondDateList[2];
        
      this.projectFormData.intervalTime = [this.firstDatefinal, this.secondDatefinal];

    }
  }
  