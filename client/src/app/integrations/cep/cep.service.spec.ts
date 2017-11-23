import { TestBed, inject } from '@angular/core/testing';
import { CepService } from './cep.service';
import { HttpModule } from '@angular/http';

describe('CepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CepService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([CepService], (service: CepService) => {
    expect(service).toBeTruthy();
  }));

  // it('should be able to get a cep',
  //   inject([CepService],
  //     (service: CepService) => {
  //   service.getAddress('')
  //     .then((address) => expect(address.length).toBeGreaterThan(0));
  // }));
});
