import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Notification } from './notification';
import { NotificationsService } from '../notifications.service';
import { NotificationType } from './notification-type';
import { CommonMethods } from '../commonMethods.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: [
    './notifications.component.css',
    "../../../node_modules/bootstrap/dist/css/bootstrap.css"
  ],
  animations: [
    trigger('removeNotification', [
      state('true', style({ opacity: '0' })),
      state('false', style({ opacity: '1' })),
      transition('true <=> false', animate('100ms 100ms ease-out'))
    ])
  ]
})
export class NotificationsComponent implements OnInit {

  @Output()
  notificationsReceived = new EventEmitter();

  notifications: any[] = [];

  notificationType = NotificationType;

  constructor(private notificationsService: NotificationsService) { }

  getNotifications() {
    // console.log(this.notificationType);
    this.notificationsService.getNotifications()
      .subscribe(notifications => {
        this.notificationsReceived.emit(notifications);
        this.notifications = notifications.map(n => {

          let icon = 'fa fa-info-circle';
          switch (n.type) {
            case 1:
              icon = 'fa fa-check-circle';
              break;
            case 2:
              icon = 'fa fa-exclamation-triangle';
              break;
            case 3:
              icon = 'fa fa-times-circle';
              break;
            case 4:
              icon = 'fa fa-user-plus';
              break;
          }

          console.log(icon);
          return {
            id: n.id,
            head: n.header.replace('Notification', NotificationType[n.type] + ' Notification'),
            message: n.message,
            isRead: n.isRead,
            isDeleted: n.isDeleted,
            type: n.type,
            typeText: NotificationType[n.type].toLowerCase(),
            cssClass: '',
            additionalAttributes: n.additionalAttributes,
            icon: icon,
            isHidden: false
          };
        })
      })
  }

  hideNotifications() {
    let theLoop: (i: number, delay?) => void = (i: number, delay = 1000) => {
      setTimeout(() => {
        // this.notifications[i].isRead = true;
        this.notifications[i].isHidden = true;
        this.notifications[i].cssClass += ' none';
        if (--i >= 0) {
          theLoop(i);
        }
      }, delay);
    };

    theLoop(this.notifications.length - 1);
  }

  ngOnInit() {
    this.getNotifications();

    setTimeout(() => { this.hideNotifications(); }, 3000);
  }

  removeNotification(id) {
    var n = this.notifications.find(n => n.id == id);
    n.isRead = true;
    var index = this.notifications.indexOf(n, 0);
    if (index > -1) {
      n.isDeleted = true;
      setTimeout(() => { this.notifications.splice(index, 1); }, 350);
    }
  }

  requestAccepted(id) {
    console.log(`Request accepted ${id}`);
  }

  requestRejected(id) {
    console.log(`Request rejected ${id}`);
  }
}
