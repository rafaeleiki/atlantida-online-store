import { TestBed, inject } from '@angular/core/testing';
import { ClientService } from './client.service';
import {HttpModule} from '@angular/http';
import {AuthenticationRequest, AuthenticationResponse, CreateClientResponse} from './client.api';

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
  //     username: "atlantida",
  //     name: "Menino Atlantida",
  //     password: "testeatlantida",
  //     phone: "19987654321",
  //     cpf: "12015469400",
  //     email: "testezinho@teste.com"
  //   }).then((res: CreateClientResponse) => {
  //     expect(res).toBeTruthy();
  //   });
  // }));

  it('should be able to login a client', inject([ClientService], (service: ClientService) => {
    service.authenticate({
      cpf: '12015469400',
      password: 'testeatlantida'
    }).then((response) => {
      expect(response.error_code).toBeFalsy();
    });
  }));
});
