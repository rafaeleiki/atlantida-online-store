import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { SerasaService } from './serasa.service';

describe('SerasaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerasaService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([SerasaService], (service: SerasaService) => {
    expect(service).toBeTruthy();
  }));

  it('herinque should be inadimplente',
    inject([SerasaService],
      (service: SerasaService) => {
    service.getScore(32453415808)
      .then((score) => expect(score).toBe(0));
  }));
});
