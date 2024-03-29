import { Component } from '@angular/core';
import { FormLayout } from 'ng-devui';

@Component({
  selector: 'da-basic-settings',
  templateUrl: './basic-settings.component.html',
  styleUrls: ['./basic-settings.component.scss']
})
export class BasicSettingsComponent {
  verticalLayout: FormLayout = FormLayout.Vertical;

  labelList = [
    {
      id: 1,
      label: 'Tag 1',
    },
    {
      id: 2,
      label: 'Tag 2',
    },
    {
      id: 3,
      label: 'Tag 3',
    },
  ];

  addedLabelList = [];

  Options = [
    {
      id: 1,
      label: 'Itali',
    },
  ];

  formData = {
    selectValue: this.Options[0],
  };

  imgSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  constructor() {}

  ngOnInit(): void {}
}
