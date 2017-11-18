import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { SerasaService } from './serasa.service';
import {SerasaScore} from './serasa';

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

  it('should show Herinque as defaulting',
    inject([SerasaService],
      (service: SerasaService) => {
    service.getScore('32453415808')
      .then((response: SerasaScore) => expect(response.score).toBe(0));
  }));
});
