export interface Product {
  _id: string;
  name: string;
  category: string;
  color: string;
  year: number;
  weight: number;
  price: number;
  group: string;
  highlighted: boolean;
  enabled: boolean;
  stock: number;
  dimensions: number[];
  brand: string;
  model: string;
  img: string[];
  reviews: any[];
}
