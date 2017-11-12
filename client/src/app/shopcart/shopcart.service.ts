import { Injectable } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';
import { ShopCartItem, ShopCart } from './shopcart';
import { Observable }   from 'rxjs/Observable';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';


const SHOPCART_ID = "ShopCartItems";

@Injectable()
export class ShopCartService {
  shopCartQnt : BehaviorSubject<number>;

  constructor() {
    const shopCart = this.getShopCart();
    this.shopCartQnt = new BehaviorSubject<number>(Object.keys(shopCart).length);
  }

  addToCart(product, qnt) : void {
    // Tries to load shopCart items from localStorage
    const shopCart = this.getShopCart();

    // If the product exists, updates its qnt
    if (shopCart[product._id]) {
      shopCart[product._id].qnt = qnt;
    } else {
      // Sets expire date to tomorrow
      let expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 1);

      // Adds it to the storage
      shopCart[product._id] = {
        productId: product._id,
        name: product.name,
        qnt: qnt,
        price: product.price,
        expires: expiryDate,
      };

      this.shopCartQnt.next(Object.keys(shopCart).length);
    }

    this.saveShopCart(shopCart);
  }

  changeQnt(item : ShopCartItem, amount : number) : void {
    const shopCart = this.getShopCart();
    if (shopCart[item.productId]) {
      item.qnt += amount;
      shopCart[item.productId].qnt += amount;
      this.saveShopCart(shopCart);
    }
  }

  increase(item : ShopCartItem) : void {
    this.changeQnt(item, +1);
  }

  decrease(item : ShopCartItem) : void {
    this.changeQnt(item, -1);
  }

  remove(item : ShopCartItem) :void  {
    const shopCart = this.getShopCart();
    delete shopCart[item.productId];
    this.saveShopCart(shopCart);
    this.shopCartQnt.next(Object.keys(shopCart).length);
  }

  saveShopCart(shopCart : ShopCart) : void {
    getWindow().localStorage.setItem(SHOPCART_ID, JSON.stringify(shopCart));
  }

  getShopCartList() : ShopCartItem[] {
      const shopCart = this.getShopCart();
      let shopCartList = [];
      for (let pId in shopCart) {
        shopCartList.push(shopCart[pId]);
      }
      return shopCartList;
  }

  getShopCart() : ShopCart {
    const json = getWindow().localStorage.getItem(SHOPCART_ID);
    return json ? JSON.parse(json) : {};
  }

}

function getWindow() {
  return window;
}
