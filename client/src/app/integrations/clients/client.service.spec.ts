import { TestBed, inject } from '@angular/core/testing';

import { ClientService } from './client.service';
import {CreateClientResponse} from './client.api.interfaces';
import {HttpModule} from '@angular/http';

describe('ClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ClientService]
    });
  });

  it('should be created', inject([ClientService], (service: ClientService) => {
    expect(service).toBeTruthy();
  }));

  // it('should be able to sign up a client', inject([ClientService], (service: ClientService) => {
  //   service.signUp({
  //     payload: {
  //       username: 'Teste automático',
  //       name: 'Teste automático',
  //       password: 'Teste automático',
  //       phone: '19987654321',
  //       CPF: '120.154.694-00',
  //       email: 'testezinho@teste.com',
  //     }
  //   }).then((res: CreateClientResponse) => {
  //     expect(res.payload).toBeTruthy();
  //   });
  // }));
});
