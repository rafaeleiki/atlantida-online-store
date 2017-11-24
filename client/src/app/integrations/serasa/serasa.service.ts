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
        let promise;
        if (error.status === 404) {
          promise = Promise.resolve({ score: 1 });
        } else {
          console.error(`Error on get score of CPF ${cpf}`, error);
          promise = Promise.reject(error.message || error);
        }
        return promise;
      });
  }

}
