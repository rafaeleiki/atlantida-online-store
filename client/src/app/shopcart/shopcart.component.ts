import { Component, OnInit, ViewChild } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';
import { ShopCartService } from '../shopcart/shopcart.service';
import { ShopCartItem, ShopCart } from './shopcart';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})

export class ShopCartComponent implements OnInit {
  private storage = '';
  private shopCartList: ShopCartItem[];

  @ViewChild('decreaseTooltip') public decreaseTooltip: NgbTooltip;

  constructor(private scs : ShopCartService) {}

  increase(item : ShopCartItem) {
    this.scs.increase(item);
  }

  decrease(item : ShopCartItem) {
    if (item.amount == 1) {
      this.decreaseTooltip.open();
      setTimeout(() => this.decreaseTooltip.close(), 3000);
    } else {
      this.scs.decrease(item);
    }
  }

  remove(item : ShopCartItem, i : number) : void {
    this.scs.remove(item);
    this.shopCartList.splice(i, 1);
  }

  ngOnInit() {
    this.shopCartList = this.scs.getShopCartList();
  }

}
