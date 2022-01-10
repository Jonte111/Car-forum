import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportcarsComponent } from './sportcars.component';

describe('SportcarsComponent', () => {
  let component: SportcarsComponent;
  let fixture: ComponentFixture<SportcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
