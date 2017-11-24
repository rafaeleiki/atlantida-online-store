import { Injectable } from '@angular/core';
import { SHOPPING_HISTORY } from './user.data';
import {Buy, SoldProduct, User} from './user';
import {ClientService} from '../integrations/clients/client.service';
import {UserResponse} from '../integrations/clients/client.api';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {ServerService} from '../server/server.service';

const USER_KEY = 'user_info';

function getStorage() { return window.localStorage; }

@Injectable()
export class UserService {

  private user: User;
  private subject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    private clientService: ClientService,
    private serverService: ServerService) {
    let json = getStorage().getItem(USER_KEY);
    this.user = json ? JSON.parse(json) : null;
    this.subject.next(this.user);
  }

  login(cpf: string, password: string): Promise<User> {
    return this.clientService.authenticate({ cpf, password })
      .then((auth) => this.getUserInfo(auth.payload.id));
  }

  logout() {
    this.user = null;
    getStorage().removeItem(USER_KEY);
    this.subject.next(this.user);
  }

  getCurrentUser(): Promise<User> {
    return Promise.resolve(this.user);
  }

  getShoppingHistory(): Promise<Buy[]> {
    return this.serverService.getPayments(this.user.cpf)
      .then(payments => payments.map(payment => {
        return {
          id: payment.payment_id,
          statusLabel: 'Entregue',
          statusPercentage: 100,
          date: payment.sale_date,
          expectedDelivery: payment.sale_date,
          deliveryPlace: 'Instituto de Computação',
          deliveryCost: payment.shipping_cost,
          productsCost: payment.total_cost - payment.shipping_cost,
          totalCost: payment.total_cost,
          paymentMethod: 'Crédito',
          products: payment.products.map((product): SoldProduct => {
            return {
              ...product,
              totalCost: product.price * product.amount,
              picture: '',
            };
          })
        };
      }));
  }

  getUserObservable(): Observable<User> {
    return this.subject.asObservable();
  }

  private getUserInfo(clientId: string): Promise<User> {
    return this.clientService.getUserInfo(clientId)
      .then((user: UserResponse) => this.setUser(user));
  }

  private setUser(user: UserResponse): User {
    this.user = {
      cpf: user.payload.cpf,
      name: user.payload.name,
      username: user.payload.username,
      email: user.payload.email,
      phone: user.payload.phone,
      address: null,
      cep: ''
    };
    this.subject.next(this.user);
    getStorage().setItem(USER_KEY, JSON.stringify(this.user));
    return this.user;
  }
}
