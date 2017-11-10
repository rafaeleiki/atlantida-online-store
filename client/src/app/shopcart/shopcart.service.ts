import { Injectable } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';

const SHOPCART_ID = "ShopCartProduct2";

export interface ShopCartItem {
    qnt: number;
    name: string;
    price: number;
    expires: Date;
    productId: string;
}

export interface ShopCart {
  [id: string]: ShopCartItem;
}

@Injectable()
export class ShopcartService {


  constructor() { }

  addToCart(product, qnt) {
    const shopcart = this.getShopcart();
    if (shopcart[product._id]) {
      shopcart[product._id].qnt = qnt;
    }
    else {
      let date = new Date();
      date.setDate(date.getDate() + 1);
      const data = {
        name: product.name,
        id: product._id,
        price: product.price,
        qnt: qnt,
        expires: date,
      };
      shopcart[product._id] = data;
    }
    getWindow().localStorage.setItem(SHOPCART_ID, JSON.stringify(shopcart));
  }

  getShopcartList(){
      let cart = this.getShopcart();
      let cartlist = [];
      for(let id in cart){
        cartlist.push(cart[id]);
      }
      return cartlist;
  }


  getShopcart() {
    const json = getWindow().localStorage.getItem(SHOPCART_ID);
    return json ? JSON.parse(json) : {};
  }

}

function getWindow(){
  return window;
}
