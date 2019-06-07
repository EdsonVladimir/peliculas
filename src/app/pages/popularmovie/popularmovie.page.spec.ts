import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularmoviePage } from './popularmovie.page';

describe('PopularmoviePage', () => {
  let component: PopularmoviePage;
  let fixture: ComponentFixture<PopularmoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularmoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularmoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
