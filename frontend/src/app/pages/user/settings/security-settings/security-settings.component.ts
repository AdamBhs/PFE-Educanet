import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['../settings.component.scss']
})
export class SecuritySettingsComponent implements OnInit {
  securityItems = [
    {
      title: 'Account password',
      description: 'Your current password strength is :',
      results: 'powerful'
    },
    {
      title: 'Mobile phone',
      description: 'Mobile phone number bound :',
      results: '188***1234'
    },
    {
      title: 'Bind email',
      description: 'Already bound email address:',
      results: 'devui***admin.com'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
