import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import {ClientService} from '../integrations/clients/client.service';
import {HttpModule} from '@angular/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        ClientService,
      ],
      imports: [ HttpModule]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));


  it('should get user infos', inject([UserService], (service: UserService) => {
    service.login('12015469400','testeatlantida')
    .then((response) => expect(response.address.length).toBe(1))
  }));
})  ;
