import { Injectable } from '@angular/core';
import { SHOPPING_HISTORY } from './user.data';
import {Buy, User} from './user';
import {ClientService} from '../integrations/clients/client.service';
import {UserResponse} from '../integrations/clients/client.api';
import {Subscription} from 'rxjs/Subscription';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private user: User;
  private subject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private clientService: ClientService) { }

  login(cpf: string, password: string): Promise<User> {
    return this.clientService.authenticate({ cpf, password })
      .then((auth) => this.getUserInfo(auth.payload.id));
  }

  getCurrentUser(): Promise<User> {
    return Promise.resolve(this.user);
  }

  getShoppingHistory(): Promise<Buy[]> {
    return Promise.resolve(SHOPPING_HISTORY);
  }

  getUserObservable(): Observable<User> {
    return this.subject.asObservable();
  }

  private getUserInfo(clientId: string): Promise<User> {
    return this.clientService.getUserInfo(clientId)
      .then((user: UserResponse) => {
        this.user = {
          cpf: user.payload.cpf,
          name: user.payload.name,
          username: user.payload.username,
          email: user.payload.email,
          phone: user.payload.phone
        };
        this.subject.next(this.user);
        return this.user;
      });
  }
}
