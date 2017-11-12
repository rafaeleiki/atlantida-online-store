export interface ShopCartItem {
    productId: string;
    name: string;
    qnt: number;
    price: number;
    expires: Date;
}

export interface ShopCart {
  [id: string]: ShopCartItem;
}
