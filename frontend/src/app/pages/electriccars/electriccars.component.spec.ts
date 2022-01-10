import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectriccarsComponent } from './electriccars.component';

describe('ElectriccarsComponent', () => {
  let component: ElectriccarsComponent;
  let fixture: ComponentFixture<ElectriccarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectriccarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectriccarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
