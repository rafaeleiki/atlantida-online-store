import { Injectable } from '@angular/core';
import {CURRENT_USER, SHOPPING_HISTORY} from './user.data';
import {Buy, User} from './user';

@Injectable()
export class UserService {

  constructor() { }

  getCurrentUser(): Promise<User> {
    return Promise.resolve(CURRENT_USER);
  }

  getShoppingHistory(): Promise<Buy[]> {
    return Promise.resolve(SHOPPING_HISTORY);
  }
}
