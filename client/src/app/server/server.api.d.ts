export interface PaymentModel {
  payment_id: number;
  delivery_id: number;
  cpf: string;
  products: string;
  total_cost: number;
  shipping_cost: number;
  sale_date: Date;
}
