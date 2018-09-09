import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../hero.service';

import { HeroRule } from "./heroRule";

// import { HeroesRules } from './mock-hero-rule';

import { Hero } from '../heroes/hero';
// import { HeroesComponent } from '../heroes/heroes.component';
// import { HeroesRules } from './mock-hero-rule';

import { CommonMethods } from '../commonMethods.component';

@Component({
  selector: 'app-hero-rule',
  templateUrl: './hero-rule.component.html',
  styleUrls: ['./hero-rule.component.css']
})
export class HeroRuleComponent implements OnInit {

  heroes: Hero[];

  heroesRules: HeroRule[];

  heroesRulesByHero: { id: number, heroName: string, heroId: number, rule: string }[];

  constructor(private heroService: HeroService, private router: Router) { }

  getHeroesRulesByHeroes() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.getHeroesRules();
    });
  }

  getHeroesRules(){
    this.heroService.getHeroesRules().subscribe(heroesRules => {
      this.heroesRules = heroesRules;
      
      // this.heroesRules.forEach(hr =>
      //   hr.heroId = this.heroes[CommonMethods.getRandomTo(this.heroes.length)].id
      // );

      this.heroesRulesByHero = Object.keys(this.heroesRules)
        .map(key =>
          ({
            id: this.heroesRules[key].id,
            heroName: this.heroes.find(h => h.id == this.heroesRules[key].heroId).name,
            heroId: this.heroesRules[key].heroId,
            rule: this.heroesRules[key].rule
          }))
        .sort((hrf: any, hrs: any) => { return hrf.id - hrs.id; });

      var groupByName = [];

      this.heroesRulesByHero.forEach(function (a) {
        groupByName[a.heroId] = groupByName[a.heroId] || [];
        groupByName[a.heroId].push(a);
      });

      this.heroesRulesByHero = groupByName.reduce(function (a, b) { return a.concat(b); });
    });
  }

  ngOnInit() {
    this.getHeroesRulesByHeroes();
  }

  redirect(id: number) {
    this.router.navigate([`./detail/${id}`]);
  }
}
