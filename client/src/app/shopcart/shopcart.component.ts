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

  constructor(private scs : ShopCartService) {}

  remove(item : ShopCartItem, i : number) : void {
    this.scs.remove(item);
    this.shopCartList.splice(i, 1);
  }

  ngOnInit() {
    this.shopCartList = this.scs.getShopCartList();
  }

}
