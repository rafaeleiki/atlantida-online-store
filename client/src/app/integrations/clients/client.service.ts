import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {
  AuthenticationRequest,
  AuthenticationResponse,
  CreateClientRequest,
  CreateClientResponse,
  UserResponse
} from './client.api';

export const AUTH_ERRORS = {
  INVALID_CPF: 'INVALID_CPF',
  NOT_FOUND: 'NOT_FOUND'
};

@Injectable()
export class ClientService {

  private url = 'http://mc437.ddns.net:5001/';
  private authToken: string;

  constructor(private http: Http) { }

  signUp(data: CreateClientRequest): Promise<CreateClientResponse> {
    return this.http.post(this.url + 'client', data)
      .toPromise()
      .then((res) => res.json() as CreateClientResponse)
      .catch(error => {
        console.error('Error trying to sign up client', error);
        return Promise.reject(error.message || error);
      });
  }

  authenticate(data: AuthenticationRequest): Promise<AuthenticationResponse> {
    return this.http.post(this.url + 'client/auth', data)
      .toPromise()
      .then((res) => {
        let response: AuthenticationResponse = res.json() as AuthenticationResponse;
        let result = response;
        if (response.error_code) {
          result = Promise.reject(response.error_code);
        } else {
          this.authToken = response.payload.token;
        }
        return result;
      })
      .catch(error => {
        console.error(`Error trying to authenticate client '${ data.cpf }'`, error);
        return Promise.reject(error.message || error);
      });
  }

  getUserInfo(clientId: string): Promise<UserResponse> {
    if (!this.authToken) {
      throw Error('Need to authenticate before getting user info');
    }
    return this.http.get(this.url + `client/${clientId}`, {
      headers: new Headers({ 'X-access-token': this.authToken })
    }).toPromise()
      .then(response => response.json() as UserResponse);
  }
}
