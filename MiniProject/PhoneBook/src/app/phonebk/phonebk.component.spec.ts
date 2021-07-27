import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebkComponent } from './phonebk.component';

describe('PhonebkComponent', () => {
  let component: PhonebkComponent;
  let fixture: ComponentFixture<PhonebkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonebkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
