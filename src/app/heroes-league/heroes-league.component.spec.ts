import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesLeagueComponent } from './heroes-league.component';

describe('HeroesLeagueComponent', () => {
  let component: HeroesLeagueComponent;
  let fixture: ComponentFixture<HeroesLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
