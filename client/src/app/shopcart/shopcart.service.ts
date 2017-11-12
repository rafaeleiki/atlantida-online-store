import { Injectable } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';
import { ShopCartItem, ShopCart } from './shopcart';

const SHOPCART_ID = "ShopCartItems";

@Injectable()
export class ShopCartService {

  constructor() { }

  addToCart(product, qnt) {
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
    }

    this.saveShopCart(shopCart);
  }

  saveShopCart(shopCart : ShopCart) {
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
