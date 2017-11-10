import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';
import {ShopcartService} from '../shopcart/shopcart.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopCartComponent implements OnInit {
  private cookies;

  constructor(private scs: ShopcartService) {
  }

  ngOnInit() {
    this.cookies = this.readCookies();
  }

  readCookies(){
    return this.scs.listCookies();
  }
}
