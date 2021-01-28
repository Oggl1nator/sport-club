import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsRegistrationComponent } from './visitsRegistration.component';

describe('VisitsRegistrationComponent', () => {
  let component: VisitsRegistrationComponent;
  let fixture: ComponentFixture<VisitsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitsRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
