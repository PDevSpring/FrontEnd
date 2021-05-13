import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentconfirmComponent } from './agentconfirm.component';

describe('AgentconfirmComponent', () => {
  let component: AgentconfirmComponent;
  let fixture: ComponentFixture<AgentconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentconfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
