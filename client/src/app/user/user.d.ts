export interface User {
  name: string;
  username: string;
  email: string;
  cpf: string;
  picture: string;
}

export interface Buy {
  id: number;
  product: {
    name: string;
    price: number;
    picture: string;
  };
  date: Date;
  amount: number;
  state: string;
  paymentMethod: string;
  deliveryPlace: string;
}
