export interface User {
  name: string;
  username: string;
  email: string;
  cpf: string;
  picture: string;
}

export interface SoldProduct {
  name: string;
  price: number;
  picture: string;
  amount: number;
}

export interface Buy {
  id: number;
  statusLabel: string;
  statusPercentage: number;
  date: Date;
  expectedDelivery: Date;
  deliveryPlace: string;
  totalCost: number;
  paymentMethod: string;
  products: SoldProduct[];
}
