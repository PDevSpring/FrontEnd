import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfournitureownerComponent } from './clientfournitureowner.component';

describe('ClientfournitureownerComponent', () => {
  let component: ClientfournitureownerComponent;
  let fixture: ComponentFixture<ClientfournitureownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientfournitureownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientfournitureownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
