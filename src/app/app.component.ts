import { Component } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';

import { CommonMethods } from './commonMethods.component';
import { Notification } from './notifications/notification';
import { NotificationType } from './notifications/notification-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Text = 'Hello, this is hossam';

  routes: any = [];

  notificationBarData = {
    showNotificationBar: false,
    notifications: []
  };

  isActive = false;

  notificationsCount: number = 0;

  notifications: Notification[] = [];

  constructor(private router: Router) {
    this.routes = this.router.config.filter(r => r.path.length > 0 && !r.path.includes("id")).map(
      r => ({ route: r.path, name: CommonMethods.SeperateString(r.component.name.replace("Component", "")) })
    );
  }

  // ngOnInit(){
  //    console.log(this.routes);
  // }

  setNotificationsCount(notifications) {
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

      if(!n.isRead)
      this.notificationsCount++;

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
        icon: icon
      };
    })
  }

  toggleNotificationBar() {
    this.notificationBarData.showNotificationBar = !this.notificationBarData.showNotificationBar;
    this.isActive = !this.isActive;
    if (this.notificationBarData.showNotificationBar){
      this.notificationBarData.notifications = this.notifications;
    }
  }
}
