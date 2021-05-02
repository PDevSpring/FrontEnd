import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsettComponent } from './accountsett.component';

describe('AccountsettComponent', () => {
  let component: AccountsettComponent;
  let fixture: ComponentFixture<AccountsettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsettComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
