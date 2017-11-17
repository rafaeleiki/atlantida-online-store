export interface ShopCartItem {
    productId: string;
    name: string;
    amount: number;
    price: number;
    expires: Date;
}

export interface ShopCart {
  [id: string]: ShopCartItem;
}
