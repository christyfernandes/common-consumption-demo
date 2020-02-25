import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCardsStackComponent } from './demo-cards-stack.component';

describe('DemoCardsStackComponent', () => {
  let component: DemoCardsStackComponent;
  let fixture: ComponentFixture<DemoCardsStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCardsStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCardsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
