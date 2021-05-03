import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksettingsComponent } from './banksettings.component';

describe('BanksettingsComponent', () => {
  let component: BanksettingsComponent;
  let fixture: ComponentFixture<BanksettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
