import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {
  AuthenticationRequest,
  AuthenticationResponse,
  CreateClientRequest,
  CreateClientResponse,
  UserResponse,
  UserAddress, UserAddressResponse
} from './client.api';

function getStorage() { return window.localStorage; }

const TOKEN_KEY = 'token_key';

export const AUTH_ERRORS = {
  INVALID_CPF: 'INVALID_CPF',
  NOT_FOUND: 'NOT_FOUND'
};

export const ADDRESS_ERRORS = {
  ADDRESS_NOT_FOUND: 'ADDRESS_NOT_FOUND'
};

@Injectable()
export class ClientService {

  private url = 'http://mc437.ddns.net:5001/';
  private authToken: string;

  constructor(private http: Http) {
    this.authToken = getStorage().getItem(TOKEN_KEY);
  }

  signUp(data: CreateClientRequest): Promise<CreateClientResponse> {
    return this.http.post(this.url + 'client', data)
      .toPromise()
      .then((res) => res.json() as CreateClientResponse)
      .catch(error => {
        console.error('Error trying to sign up client', error);
        return Promise.reject(error.message || error);
      });
  }

  getAccessHeader() : Object {
    if (!this.authToken) {
      throw Error('Need to authenticate before getting user info');
    }

    return {
      headers: new Headers({ 'X-Access-Token': this.authToken })
    };
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
          this.setToken(response);
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
    return this.http.get(this.url + `client/${clientId}`, this.getAccessHeader())
      .toPromise()
      .then(response => response.json() as UserResponse);
  }

  getUserAddresses(clientId: string): Promise<UserAddress[]> {
    if (!this.authToken) {
      throw Error('Need to authenticate before getting user info');
    }
    return this.http.get(this.url + `address/${clientId}`, this.getAccessHeader())
      .toPromise()
      .then((res) => {
        let response: UserAddressResponse = res.json() as UserAddressResponse;
        if (response.error_code) {
          // throw new Error(response.error_code);
          return [];
        } else {
          return response.payload.addresses;
        }
      })
      .catch(error => {
        console.error(`Error trying to retrieve address`, error);
        return Promise.reject(error.message || error);
      });
  }

  removeAddress(addrId: string): Promise<void> {
    if (!this.authToken) {
      throw Error('Need to authenticate before getting user info');
    }
    return this.http.delete(this.url + `address/${addrId}`, this.getAccessHeader())
      .toPromise().then( () => {});
  }

  addAddress(clientId: string, cep: string, houseNumber: number): Promise<UserAddress> {
    if (!this.authToken) {
      throw Error('Need to authenticate before getting user info');
    }
    return this.http.post(this.url + `address/${clientId}`, {cep: cep, number: houseNumber}, this.getAccessHeader())
      .toPromise()
      .then(response => response.json() as UserAddress);
  }

  setToken(response: AuthenticationResponse) {
    this.authToken = response.payload.token;
    getStorage().setItem(TOKEN_KEY, this.authToken);
  }
}
