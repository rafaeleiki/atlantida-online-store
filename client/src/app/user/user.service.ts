import { Injectable } from '@angular/core';
import { SHOPPING_HISTORY } from './user.data';
import {Buy, User} from './user';
import {ClientService} from '../integrations/clients/client.service';
import {UserResponse, UserAddress} from '../integrations/clients/client.api';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

const USER_KEY = 'user_info';

function getStorage() { return window.localStorage; }

@Injectable()
export class UserService {

  private user: User;
  private subject: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private clientService: ClientService) {
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
    return Promise.resolve(SHOPPING_HISTORY);
  }

  getUserObservable(): Observable<User> {
    return this.subject.asObservable();

  }

  getUserInfo(clientId: string): Promise<User> {
    return this.clientService.getUserInfo(clientId)
      .then((user: UserResponse) => this.setUser(user));
  }


  updateAdressess(user: User): Promise<User> {
    return this.clientService.getUserAddresses(user.id)
      .then((address: UserAddress[])=> {
        this.user.address = address;
        getStorage().setItem(USER_KEY, JSON.stringify(this.user));

        return this.user;
      });
  }

  private setUser(user: UserResponse): Promise<User> {
    return this.clientService.getUserAddresses(user.payload.id)
    .then((address: UserAddress[])=> {
      this.user = {
        name: user.payload.name,
        username: user.payload.username,
        email: user.payload.email,
        phone: user.payload.phone,
        cpf: user.payload.cpf,
        address: address,
        id: user.payload.id,
      };
      getStorage().setItem(USER_KEY, JSON.stringify(this.user));
      this.subject.next(this.user);
      return this.user;
    });
  }
}
