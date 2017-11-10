import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';
import {ShopCart, ShopCartItem, ShopcartService} from '../shopcart/shopcart.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})

export class ShopCartComponent implements OnInit {
  private storage = '';
  private shopCart: ShopCartItem[];

  constructor(private scs: ShopcartService) {
  }

  ngOnInit() {
    this.shopCart = this.scs.getShopcartList();
  }

}
