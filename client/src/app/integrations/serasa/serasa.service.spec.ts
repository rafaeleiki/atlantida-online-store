import { TestBed, inject } from '@angular/core/testing';

import { SerasaService } from './serasa.service';

describe('SerasaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerasaService]
    });
  });

  it('should be created', inject([SerasaService], (service: SerasaService) => {
    expect(service).toBeTruthy();
  }));
});
