import { Injectable } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';

@Injectable()
export class ShopcartService {


  constructor() { }

  addToCart(product, qnt) {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    var expires = "; expires="+ date.toUTCString();
    var data = JSON.stringify({
      'name':product.name,
      'id':product._id,
      'price':product.price,
      'qnt': qnt });
    document.cookie = "ShopCartProduct=" + data + expires;
  }

  listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}

}
