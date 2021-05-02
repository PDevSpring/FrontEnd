import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitfurnitureComponent } from './visitfurniture.component';

describe('VisitfurnitureComponent', () => {
  let component: VisitfurnitureComponent;
  let fixture: ComponentFixture<VisitfurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitfurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
