import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminareaComponent } from './adminarea.component';

describe('AdminareaComponent', () => {
  let component: AdminareaComponent;
  let fixture: ComponentFixture<AdminareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
