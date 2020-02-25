import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFaqComponent } from './demo-faq.component';

describe('DemoFaqComponent', () => {
  let component: DemoFaqComponent;
  let fixture: ComponentFixture<DemoFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
