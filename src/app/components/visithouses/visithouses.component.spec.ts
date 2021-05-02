import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisithousesComponent } from './visithouses.component';

describe('VisithousesComponent', () => {
  let component: VisithousesComponent;
  let fixture: ComponentFixture<VisithousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisithousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisithousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
