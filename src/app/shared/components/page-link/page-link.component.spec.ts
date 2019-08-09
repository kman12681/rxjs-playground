/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageLinkComponent } from './page-link.component';

describe('PageLinkComponent', () => {
  let component: PageLinkComponent;
  let fixture: ComponentFixture<PageLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
