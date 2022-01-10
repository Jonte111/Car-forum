import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterancarsComponent } from './veterancars.component';

describe('VeterancarsComponent', () => {
  let component: VeterancarsComponent;
  let fixture: ComponentFixture<VeterancarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterancarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterancarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
