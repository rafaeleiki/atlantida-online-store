import {Buy, SoldProduct, User} from './user';

/*export const CURRENT_USER: User = {
  name: 'Teste',
  username: 'teste',
  email: 'teste@teste.com',
  phone: '946521576',
  cpf: '12345678910',
  picture: 'assets/img/leila.jpeg',
};*/

const P1: SoldProduct = {
  name: "Caneca Neymar Top",
  amount: 2,
  price: 20.00,
  totalCost: 40.00,
  picture: null
};

const P2: SoldProduct = {
  name: "Animal Crossing New Leaf",
  amount: 1,
  price: 149.90,
  totalCost: 149.90,
  picture: null
};

const P3: SoldProduct = {
  name: "Caneca pequena",
  amount: 2,
  price: 7.00,
  totalCost: 14.00,
  picture: null
};

const P4: SoldProduct = {
  name: "Canecão da porra",
  amount: 1,
  price: 50.00,
  totalCost: 50.00,
  picture: null
};

export const  SHOPPING_HISTORY: Buy[] = [
  {
    id: 1,
    statusLabel: "Entregue",
    statusPercentage: 100,
    date: new Date("01/11/2011"),
    expectedDelivery: new Date("11/11/2011"),
    deliveryPlace: "Lá em casa",
    deliveryCost: 5.00,
    productsCost: 114.00,
    totalCost: 119.00,
    paymentMethod: "Cartão de crédito",
    products: [P1, P2, P3, P4]
  },
  {
    id: 2,
    statusLabel: "Enviado",
    statusPercentage: 75,
    date: new Date("01/11/2017"),
    expectedDelivery: new Date("02/11/2017"),
    deliveryPlace: "Lá na casa do zé",
    deliveryCost: 5.00,
    productsCost: 64.00,
    totalCost: 69.00,
    paymentMethod: "Cartão de crédito",
    products: [P4, P3]
  },
  {
    id: 3,
    statusLabel: "Pago",
    statusPercentage: 25,
    date: new Date("24/11/2017"),
    expectedDelivery: new Date("29/11/2017"),
    deliveryPlace: "Rua dos Catapuvis, 56",
    deliveryCost: 10.00,
    productsCost: 189.90,
    totalCost: 199.90,
    paymentMethod: "Crédito",
    products: [P1, P2]
  }
];
