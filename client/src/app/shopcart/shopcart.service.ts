import { Injectable } from '@angular/core';
import { ShopCartItem, ShopCart } from './shopcart';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
import {Product} from '../integrations/products/products';
import {ProductsService} from '../integrations/products/products.service';

const SHOPCART_ID = "ShopCartItems";

@Injectable()
export class ShopCartService {
  shopCartAmount : BehaviorSubject<number>;

  constructor(private productsService : ProductsService) {
    const shopCart = this.getShopCart();
    this.shopCartAmount = new BehaviorSubject<number>(Object.keys(shopCart).length);
  }

  addToCart(product: Product, amount: number) : void {
    // Tries to load shopCart items from localStorage
    const shopCart = this.getShopCart();

    // If the product exists, updates its amount
    if (shopCart[product._id]) {
      shopCart[product._id].amount = amount;
    } else {
      // Sets expire date to tomorrow
      let expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 1);

      // Adds it to the storage
      shopCart[product._id] = {
        productId: product._id,
        name: product.name,
        amount: amount,
        price: product.price,
        expires: expiryDate,
        volume: product.dimensions.reduce((vol, d) => vol * d, 1),
      };

      this.shopCartAmount.next(Object.keys(shopCart).length);
    }

    this.saveShopCart(shopCart);
  }

  getStock(productId : string) : Promise<number> {
    return this.productsService.getProduct(productId)
      .then(res => res.stock);
  }

  changeAmount(item : ShopCartItem, amount : number) : void {
    const shopCart = this.getShopCart();
    if (shopCart[item.productId]) {
      item.amount += amount;
      shopCart[item.productId].amount += amount;
      this.saveShopCart(shopCart);
    }
  }

  increase(item : ShopCartItem) : void {
    this.changeAmount(item, +1);
  }

  decrease(item : ShopCartItem) : void {
    this.changeAmount(item, -1);
  }

  remove(item : ShopCartItem) :void  {
    const shopCart = this.getShopCart();
    delete shopCart[item.productId];
    this.saveShopCart(shopCart);
    this.shopCartAmount.next(Object.keys(shopCart).length);
  }

  saveShopCart(shopCart : ShopCart) : void {
    getWindow().localStorage.setItem(SHOPCART_ID, JSON.stringify(shopCart));
  }

  getShopCartList() : ShopCartItem[] {
      const shopCart = this.getShopCart();
      return Object.keys(shopCart).map(key => shopCart[key]);
  }

  getShopCart() : ShopCart {
    const json = getWindow().localStorage.getItem(SHOPCART_ID);
    return json ? JSON.parse(json) : {};
  }

  clearShopCart() {
    getWindow().localStorage.setItem(SHOPCART_ID, '{}');
  }

}

function getWindow() {
  return window;
}
