import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroRuleComponent } from './hero-rule/hero-rule.component';

import { HeroesLeagueComponent } from './heroes-league/heroes-league.component';

import { DummyCodeComponent } from './DummyCode/dummyCode.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'app-hero-rule', component: HeroRuleComponent },
  { path: 'app-heroes-league', component: HeroesLeagueComponent },


  { path: 'dummy-code', component: DummyCodeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
