import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdataComponent } from './userdata.component';

describe('UserdataComponent', () => {
  let component: UserdataComponent;
  let fixture: ComponentFixture<UserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdataComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
