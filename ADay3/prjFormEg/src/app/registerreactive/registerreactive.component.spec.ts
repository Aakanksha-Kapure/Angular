import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterreactiveComponent } from './registerreactive.component';

describe('RegisterreactiveComponent', () => {
  let component: RegisterreactiveComponent;
  let fixture: ComponentFixture<RegisterreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterreactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
