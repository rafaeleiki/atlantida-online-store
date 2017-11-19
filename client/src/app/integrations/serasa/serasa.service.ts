import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {SerasaScore} from './serasa';

@Injectable()
export class SerasaService {

  private url= 'mc437.viniciusfabri.com';

  constructor(private http: Http) { }

  getScore(cpf: string): Promise<SerasaScore> {
    return this.http.get(this.url + `/sc/api/score/mc437_key_2017/${cpf}`)
      .toPromise()
      .then(response => ({ score: +response.json().score }))
      .catch((error) => {
        console.error(`Error on get score of CPF ${cpf}`, error);
        let promise;
        if (error.status) {
          promise = Promise.resolve(null);
        } else {
          promise = Promise.reject(error.message || error);
        }
        return promise;
      });
  }

}
