import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {PaymentModel} from './server.api';

@Injectable()
export class ServerService {

  private url = '/api/payments';

  constructor(private http: Http) { }

  createPayment(payment: PaymentModel): Promise<void> {
    return this.http.post(this.url, payment)
      .toPromise()
      .then(response => {});
  }

  getPayments(cpf: string): Promise<PaymentModel[]> {
    return this.http.get(this.url)
      .toPromise()
      .then((res) => {
        const payments = res.json() as PaymentModel[];
        return payments.filter((payment) => payment.cpf === cpf);
      });
  }

}
