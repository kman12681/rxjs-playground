/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchVidsComponent } from './search-vids.component';

describe('SearchVidsComponent', () => {
  let component: SearchVidsComponent;
  let fixture: ComponentFixture<SearchVidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
