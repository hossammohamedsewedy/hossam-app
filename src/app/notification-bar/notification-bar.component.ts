import { Component, OnInit, Input } from '@angular/core';
import { NotificationType } from '../notifications/notification-type';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NotificationsService } from '../notifications.service';
import { Notification } from '../notifications/notification';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css'],
  animations: [
    trigger('toggleNotificationBar', [
      state('true', style({ opacity: '1' })),
      state('false', style({ opacity: '0' })),
      transition('true <=> false', animate('100ms 100ms ease-out'))
    ])
  ]
})
export class NotificationBarComponent implements OnInit {

  @Input()
  notificationBarData = {
    showNotificationBar: false,
    notifications: []
  };

  notificationType = NotificationType;

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
  }

  requestAccepted(id) {
    console.log(`Request accepted ${id}`);
  }

  requestRejected(id) {
    console.log(`Request rejected ${id}`);
  }

  viewSettings(){
    console.log("Settings page");
  }

  markAsRead(id){
    let notification = this.notificationBarData.notifications.find(n => n.id == id);
    let notificationObj : Notification = {
      id: notification.id,
      header: notification.header,
      message: notification.message,
      isRead: true,
      isDeleted: notification.isDeleted,
      type: notification.type,
      cssClass: notification.cssClass,
      additionalAttributes: notification.additionalAttributes
    };
    this.notificationsService.markAsRead(notificationObj).subscribe(_ => notification.isRead = true);
  }
}
