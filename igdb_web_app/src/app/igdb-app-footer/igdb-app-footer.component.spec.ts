import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgdbAppFooterComponent } from './igdb-app-footer.component';

describe('IgdbAppFooterComponent', () => {
  let component: IgdbAppFooterComponent;
  let fixture: ComponentFixture<IgdbAppFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgdbAppFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgdbAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
