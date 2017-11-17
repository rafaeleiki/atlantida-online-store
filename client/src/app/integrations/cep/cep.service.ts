import { Http, Headers } from '@angular/http';
// import {  } from '@angular/common/http';


import { Injectable } from '@angular/core';
import { Observable }   from 'rxjs/Observable';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
import {Address} from './cep';

@Injectable()
export class CepService {

  private url = 'https://mc437-cep.herokuapp.com/';
  private getAddressURI = this.url + 's/cep/';
  private authToken = 'PGC924rdhDluB21Uq9kMrkT51WvBrRm5kr9k1PrlNaBogF6oXMkclgtbpbAcbwQb';

  constructor(private http: Http) {
    // this.http.post(
    //   this.url+'user', {
    //     name: 'Tales',
    //     document: '12037279680'
    //   })
    //   .subscribe(response => this.authToken = response);
  }

  getAddress(cep : string): Promise<Address> {
    let header = {
      headers: new Headers({
        'auth-token': this.authToken
      })
    };
    return this.http.get(this.getAddressURI + cep, header)
      .toPromise()
      .then(response => response.json().value as Address)
      .catch((error) => {
        console.error('Error on get cep', error);
        return Promise.reject(error.message || error);
      });
  }

  getCEP(address : string) : Promise<string[]>{
    throw new Error("Feature not implemented");
  }

}
