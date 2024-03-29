import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-message-notification',
  templateUrl: './message-notification.component.html',
  styleUrls: ['../settings.component.scss']
})
export class MessageNotificationComponent implements OnInit {
  messageItems = [
    {
      title: 'Account password',
      description: 'Account related information will be notified in the form of in-site messages.',
    },
    {
      title: 'System information',
      description: 'System messages will be notified in the form of site messages.'
    },
    {
      title: 'Service Notice',
      description: 'Service notifications will be notified in the form of in-site messages'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
