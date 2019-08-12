import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryPage } from './jury.page';

describe('JuryPage', () => {
  let component: JuryPage;
  let fixture: ComponentFixture<JuryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
