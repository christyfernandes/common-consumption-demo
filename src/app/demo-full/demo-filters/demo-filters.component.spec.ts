import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFiltersComponent } from './demo-filters.component';

describe('DemoFiltersComponent', () => {
  let component: DemoFiltersComponent;
  let fixture: ComponentFixture<DemoFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
