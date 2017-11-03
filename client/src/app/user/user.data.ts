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
    product: {
      id: '123456',
      name: 'Caneca do Neymar',
      price: 29.90,
    },
    date: new Date('8/13/2017'),
    amount: 1,
    state: 'Entregue',
    deliveryPlace: 'Rua dos Guatás, 420 - Campinas/SP',
    paymentMethod: 'Cartão de crédito',
  },
  {
    product: {
      id: '987654',
      name: 'Celular Asus',
      price: 699.90,
    },
    date: new Date('10/26/2017'),
    amount: 1,
    state: 'A caminho',
    deliveryPlace: 'Rua dos Camões, 666 - Campinas/SP',
    paymentMethod: 'Boleto bancário',
  },
];
