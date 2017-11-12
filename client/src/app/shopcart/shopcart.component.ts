import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';
import { ShopCartService } from '../shopcart/shopcart.service';
import { ShopCartItem, ShopCart } from './shopcart';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})

export class ShopCartComponent implements OnInit {
  private storage = '';
  private shopCartList: ShopCartItem[];

  constructor() {}

  getShopCartList() {
    return ShopCartService.getShopCartList();
  }

  changeQnt(item : ShopCartItem, amount : number) {
    const shopCart = ShopCartService.getShopCart();
    if (shopCart[item.productId]) {
      item.qnt += amount;
      shopCart[item.productId].qnt += amount;
      ShopCartService.saveShopCart(shopCart);
    }
  }

  increase(item : ShopCartItem) {
    this.changeQnt(item, +1);
  }

  decrease(item : ShopCartItem) {
    this.changeQnt(item, -1);
  }

  remove(item : ShopCartItem, i:number) {
    const shopCart = ShopCartService.getShopCart();
    delete shopCart[item.productId];
    ShopCartService.saveShopCart(shopCart);
    this.shopCartList.splice(i, 1);
  }

  ngOnInit() {
    this.shopCartList = ShopCartService.getShopCartList();
  }

}
