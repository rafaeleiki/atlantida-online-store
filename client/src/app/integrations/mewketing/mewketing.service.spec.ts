import { TestBed, inject } from '@angular/core/testing';

import { MewketingService } from './mewketing.service';

describe('MewketingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MewketingService]
    });
  });

  it('should be created', inject([MewketingService], (service: MewketingService) => {
    expect(service).toBeTruthy();
  }));
});
