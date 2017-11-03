export interface User {
  name: string;
  username: string;
  email: string;
  cpf: string;
  picture: string;
}

export interface Buy {
  product: {
    id: string;
    name: string;
    price: number;
  };
  date: Date;
  amount: number;
  state: string;
  paymentMethod: string;
  deliveryPlace: string;
}
