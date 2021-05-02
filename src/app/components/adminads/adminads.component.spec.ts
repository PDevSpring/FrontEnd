import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadsComponent } from './adminads.component';

describe('AdminadsComponent', () => {
  let component: AdminadsComponent;
  let fixture: ComponentFixture<AdminadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
