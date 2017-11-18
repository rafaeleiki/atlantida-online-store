export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  cpf: string;
  picture?: string;
}

export interface SoldProduct {
  name: string;
  price: number;
  totalCost: number;
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
  deliveryCost: number;
  productsCost: number;
  totalCost: number;
  paymentMethod: string;
  products: SoldProduct[];
}
