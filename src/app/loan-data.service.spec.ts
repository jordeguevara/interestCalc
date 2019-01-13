import { TestBed, inject } from '@angular/core/testing';

import { LoanDataService } from './loan-data.service';

describe('LoanDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanDataService]
    });
  });

  it('should be created', inject([LoanDataService], (service: LoanDataService) => {
    expect(service).toBeTruthy();
  }));
});
