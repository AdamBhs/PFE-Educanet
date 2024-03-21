import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'd-basic',
  templateUrl: './date-select.component.html',
  styleUrls: ['./date-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateSelectComponent {
  selectedDate1 = null;
  selectedDate2 = null;
  selectedDate3 = null;
  disabled = true;
  dateConfig = {
    timePicker: true,
    dateConverter: null,
    min: 2019,
    max: 2040,
    format: {
      date: 'MM.dd.y',
      time: 'y-MM-dd HH:mm:ss'
    }
  };

  getValue(value) {
    console.log(value);
  }
}
