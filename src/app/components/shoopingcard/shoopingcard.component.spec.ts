import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingcardComponent } from './shoopingcard.component';

describe('ShoopingcardComponent', () => {
  let component: ShoopingcardComponent;
  let fixture: ComponentFixture<ShoopingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoopingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
