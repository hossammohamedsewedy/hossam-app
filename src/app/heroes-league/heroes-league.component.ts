import { Component, OnInit } from '@angular/core';

import { HeroesLeague } from './heroesLeague';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-league',
  templateUrl: './heroes-league.component.html',
  styleUrls: ['./heroes-league.component.css']
})
export class HeroesLeagueComponent implements OnInit {

  heroesLeague : HeroesLeague[] = [];

  constructor(private heroService: HeroService) { }

  getHeroesLeague(): void {
    this.heroService.getHeroesLeague().subscribe(heroesLeague => this.heroesLeague = heroesLeague);
  }

  ngOnInit() {
    this.getHeroesLeague();
  }

}
