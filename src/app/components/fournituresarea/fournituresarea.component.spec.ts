import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournituresareaComponent } from './fournituresarea.component';

describe('FournituresareaComponent', () => {
  let component: FournituresareaComponent;
  let fixture: ComponentFixture<FournituresareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournituresareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournituresareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
