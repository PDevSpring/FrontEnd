import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminforumComponent } from './adminforum.component';

describe('AdminforumComponent', () => {
  let component: AdminforumComponent;
  let fixture: ComponentFixture<AdminforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminforumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
