import { Injectable } from '@angular/core';
import {Product, ProductsService} from '../integrations/products/products.service';

@Injectable()
export class ShopcartService {

  constructor() { }

  addToCart(product, qnt) {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    var expires = "; expires="+ date.toUTCString();
    document.cookie = "qnt=" + qnt + expires;
    document.cookie = "name=" + product.name + expires;
    document.cookie = "price=" + product.price + expires;
    document.cookie = "productId=" + product._id + expires;
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
