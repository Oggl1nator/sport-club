import { TestBed } from '@angular/core/testing';

import { VisitsRegistrationService } from './visitsRegistration.service';

describe('VisitRegistrationService', () => {
  let service: VisitsRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitsRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
