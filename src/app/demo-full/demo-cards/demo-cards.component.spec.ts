import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCardsComponent } from './demo-cards.component';

describe('DemoCardsComponent', () => {
  let component: DemoCardsComponent;
  let fixture: ComponentFixture<DemoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
