import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

import { HeroRuleComponent } from '../hero-rule/hero-rule.component';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // selectedHero: Hero = {
  //   id: 1,
  //   name: 'moaty'
  // }

  heroes: Hero[];//HEROES;
  
  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
