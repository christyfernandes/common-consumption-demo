import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCardsGridComponent } from './demo-cards-grid.component';

describe('DemoCardsGridComponent', () => {
  let component: DemoCardsGridComponent;
  let fixture: ComponentFixture<DemoCardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCardsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
