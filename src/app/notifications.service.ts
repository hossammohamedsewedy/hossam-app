import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/Rx';

import { Notification } from './notifications/notification';
import { CommonMethods } from './commonMethods.component';
import { Hero } from './heroes/hero';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NotificationsService {

  private readonly notifications = 'api/notifications';

  constructor(private http: HttpClient, private common: CommonMethods) { }

  getNotifications(): Observable<Notification[]>{
    return this.http.get<Notification[]>(this.notifications)
      .pipe(
      tap(notifications => this.common.log(`fetched notifications`)),
      catchError(this.common.handleError('getNotifications', []))
      );
  }

  getNotification(id : number){
    return this.http.get<Notification>(`${this.notifications}/${id}`)
      .pipe(
      tap(notifications => this.common.log(`fetched notification`)),
      catchError(this.common.handleError<any>('getNotification'))
      );
  }

  markAsRead(notification : Notification): Observable<Notification>{
    return this.http.put<Notification>(`${this.notifications}?id=${notification.id}`,
    notification, httpOptions)
      .pipe(
      tap(_ => this.common.log(`updated notification id=${notification.id}`)),
      catchError(this.common.handleError<any>('updateNotification'))
      );
  }
}
