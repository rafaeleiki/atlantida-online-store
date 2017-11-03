import { Injectable } from '@angular/core';

export interface User {
  name: string;
  username: string;
  email: string;
  cpf: string;
  picture: string;
}

@Injectable()
export class UserService {

  constructor() { }

  getCurrentUser(): Promise<User> {
    return Promise.resolve({
      name: 'Teste',
      username: 'teste',
      email: 'teste@teste.com',
      cpf: '12345678910',
      picture: 'assets/img/leila.jpeg',
    });
  }
}
