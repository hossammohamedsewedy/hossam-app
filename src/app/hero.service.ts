import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './heroes/hero';
import { HeroRule } from './hero-rule/heroRule';
import { HeroesLeague } from './heroes-league/heroesLeague';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/Rx';
import { CommonMethods } from './commonMethods.component';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  private heroesRulesUrl = 'api/heroesRules';

  private heroesLeagueUrl = 'api/heroesLeague';

  constructor(private http: HttpClient, private common: CommonMethods,
     private messageService: MessageService) { }

  // getHeroes(): Observable<Hero[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  // heroesList : Hero[];

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
      tap(heroes => this.common.log(`fetched heroes`)),
      catchError(this.common.handleError('getHeroes', []))
      );
  }

//  async getHeroesAsync() {
//     return await this.http.get<Hero[]>(this.heroesUrl).toPromise();
//   } 

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.common.log(`fetched hero id=${id}`)),
      catchError(this.common.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.common.log(`updated hero id=${hero.id}`)),
      catchError(this.common.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.common.log(`added hero w/ id=${hero.id}`)),
      catchError(this.common.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions)
      .pipe(
      tap(_ => this.common.log(`deleted hero id=${id}`)),
      catchError(this.common.handleError<Hero>('deleteHero'))
      );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.common.log(`found heroes matching "${term}"`)),
      catchError(this.common.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //=================== HeroRule

  getHeroesRules() {
    return this.http.get<HeroRule[]>(this.heroesRulesUrl)
    .pipe(
      tap(_ => this.common.log('found heroes rules')),
      catchError(this.common.handleError<HeroRule[]>('heroesRules', []))
    );
  }

  // async getHeroesRulesAsync() {
  //   return await this.http.get<HeroRule[]>(this.heroesRulesUrl).toPromise();
  // }

  //=================== HeroesLeague

  getHeroesLeague() {
    return this.http.get<HeroesLeague[]>(this.heroesLeagueUrl)
    .pipe(
      tap(_ => this.common.log('found heroes league')),
      catchError(this.common.handleError<HeroesLeague[]>('heroesLeague', []))
    );
  }

  // async getHeroesRulesAsync() {
  //   return await this.http.get<HeroRule[]>(this.heroesRulesUrl).toPromise();
  // }
}
