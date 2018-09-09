import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { DummyCodeComponent } from './DummyCode/dummyCode.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroRuleComponent } from './hero-rule/hero-rule.component';
import { HeroesLeagueComponent } from './heroes-league/heroes-league.component';

import { CommonMethods } from './commonMethods.component';
import { Logger } from './logger.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsService } from './notifications.service';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';


@NgModule({
  declarations: [
    DummyCodeComponent,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroRuleComponent,
    HeroesLeagueComponent,
    NotificationsComponent,
    NotificationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    HeroService,
    MessageService,
    CommonMethods,
    Logger,
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
