import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRuleComponent } from './hero-rule.component';

describe('HeroRuleComponent', () => {
  let component: HeroRuleComponent;
  let fixture: ComponentFixture<HeroRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
