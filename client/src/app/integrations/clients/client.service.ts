import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {CreateClientRequest, CreateClientResponse} from './client.api.interfaces';

@Injectable()
export class ClientService {

  url = 'http://mc437.ddns.net:5001/';

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
}
