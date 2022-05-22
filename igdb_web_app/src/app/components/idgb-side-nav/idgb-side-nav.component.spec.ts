import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdgbSideNavComponent } from './idgb-side-nav.component';

describe('IdgbSideNavComponent', () => {
  let component: IdgbSideNavComponent;
  let fixture: ComponentFixture<IdgbSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdgbSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdgbSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
