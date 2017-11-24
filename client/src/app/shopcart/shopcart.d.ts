export interface ShopCartItem {
    productId: string;
    name: string;
    amount: number;
    price: number;
    expires: Date;
    volume: number;
}

export interface ShopCart {
  [id: string]: ShopCartItem;
}
