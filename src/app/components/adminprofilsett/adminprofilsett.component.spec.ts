import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofilsettComponent } from './adminprofilsett.component';

describe('AdminprofilsettComponent', () => {
  let component: AdminprofilsettComponent;
  let fixture: ComponentFixture<AdminprofilsettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprofilsettComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprofilsettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
