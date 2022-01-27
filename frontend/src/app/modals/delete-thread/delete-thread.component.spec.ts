import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteThreadComponent } from './delete-thread.component';

describe('DeleteThreadComponent', () => {
  let component: DeleteThreadComponent;
  let fixture: ComponentFixture<DeleteThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteThreadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
