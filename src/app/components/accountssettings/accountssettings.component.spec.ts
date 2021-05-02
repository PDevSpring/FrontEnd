import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountssettingsComponent } from './accountssettings.component';

describe('AccountssettingsComponent', () => {
  let component: AccountssettingsComponent;
  let fixture: ComponentFixture<AccountssettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountssettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountssettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
