import { Injectable } from '@angular/core';

@Injectable()
export class SerasaService {

  constructor(private http: Http) { }

  getScore(cpf: string){
    return this.http.get(this.url + `/${cpf}`)
      .toPromise()
      .then(response => {
        let json = response.json();
        return {
          score: +json.score
        };
      })
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
