import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Other1Component } from './other1.component';

describe('Other1Component', () => {
  let component: Other1Component;
  let fixture: ComponentFixture<Other1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Other1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Other1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
