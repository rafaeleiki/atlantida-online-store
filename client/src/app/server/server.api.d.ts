export interface PaymentModel {
  payment_id: number;
  delivery_id: number;
  cpf: string;
  products: string;
  total_cost: number;
  shipping_cost: number;
  sale_date: Date;
}

export interface Payment {
  payment_id: number;
  delivery_id: number;
  cpf: string;
  products: PaymentProduct[];
  total_cost: number;
  shipping_cost: number;
  sale_date: Date;
}

export interface PaymentProduct {
  productId: string;
  name: string;
  amount: number;
  price: number;
  volume: number;
}
