import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTocComponent } from './demo-toc.component';

describe('DemoTocComponent', () => {
  let component: DemoTocComponent;
  let fixture: ComponentFixture<DemoTocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
