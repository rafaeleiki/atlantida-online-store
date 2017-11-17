import { TestBed, inject } from '@angular/core/testing';

import { DeliveryService } from './delivery.service';
import {HttpModule} from '@angular/http';

describe('DeliveryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([DeliveryService], (service: DeliveryService) => {
    expect(service).toBeTruthy();
  }));
});
