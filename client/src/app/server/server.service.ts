import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Payment, PaymentModel} from './server.api';

@Injectable()
export class ServerService {

  private url = '/api/payments';

  constructor(private http: Http) { }

  createPayment(payment: Payment): Promise<void> {
    const params: PaymentModel = {
      ...payment,
      products: JSON.stringify(payment.products),
    };

    return this.http.post(this.url, params)
      .toPromise()
      .then(response => {});
  }

  getPayments(cpf: string): Promise<Payment[]> {
    return this.http.get(this.url)
      .toPromise()
      .then((res) => {
        const payments = res.json() as PaymentModel[];
        return payments.filter((payment) => payment.cpf === cpf)
          .map(payment => ({
            ...payment,
            products: JSON.parse(payment.products),
          }));
      });
  }

}
