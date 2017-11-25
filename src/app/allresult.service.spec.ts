import { TestBed, inject } from '@angular/core/testing';

import { AllresultService } from './allresult.service';

describe('AllresultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllresultService]
    });
  });

  it('should be created', inject([AllresultService], (service: AllresultService) => {
    expect(service).toBeTruthy();
  }));
});
