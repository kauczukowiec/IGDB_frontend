import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgdbAppHeaderComponent } from './igdb-app-header.component';

describe('IgdbAppHeaderComponent', () => {
  let component: IgdbAppHeaderComponent;
  let fixture: ComponentFixture<IgdbAppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgdbAppHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgdbAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
