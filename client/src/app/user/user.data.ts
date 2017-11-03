import {Buy, User} from './user';

export const CURRENT_USER: User = {
  name: 'Teste',
  username: 'teste',
  email: 'teste@teste.com',
  cpf: '12345678910',
  picture: 'assets/img/leila.jpeg',
};

export const SHOPPING_HISTORY: Buy[] = [
  {
    id: 1,
    product: {
      name: 'Caneca do Neymar',
      price: 29.90,
      picture: null,
    },
    date: new Date('8/13/2017'),
    amount: 1,
    state: 'Entregue',
    deliveryPlace: 'Rua dos Guatás, 420 - Campinas/SP',
    paymentMethod: 'Cartão de crédito',
  },
  {
    id: 2,
    product: {
      name: 'Celular Asus',
      price: 699.90,
      picture: null,
    },
    date: new Date('10/26/2017'),
    amount: 1,
    state: 'A caminho',
    deliveryPlace: 'Rua dos Camões, 666 - Campinas/SP',
    paymentMethod: 'Boleto bancário',
  },
];
