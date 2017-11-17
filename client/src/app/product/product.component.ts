import { NgModule, Component, OnInit } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import {ProductsService} from '../integrations/products/products.service';
import {Product} from '../integrations/products/products';
import {ShopCartService} from '../shopcart/shopcart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product: Product;
  private amountPossibilities = [];
  private reviews = [
    { user: "leila", title: "achei um lixo", body: "muito bom amei", review: 5 },
    { user: "eiki", title: "gostei", body: "que tiroooo pisa menos 10/10", review: 4 },
  ];
  private averageReview: number;
  private selectedAmount = 1;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private scs : ShopCartService) {}
    private _success = new Subject<string>();
    successMessage: string;

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productsService.getProduct(params.get('id')))
      .subscribe((product: Product) => {
        this.product = product;
        this.setReviews();
    });

    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);
  }

  setReviews() {
    let arraySize = Math.min(this.product.stock, 10);
    this.amountPossibilities = Array(arraySize).fill(0).map((val, i) => i + 1);

    let sum = this.reviews.reduce((sum, review) => sum + review.review, 0);
    this.averageReview = sum / this.reviews.length;
  }

  add() : void {
    this.scs.addToCart(this.product, this.selectedAmount);
    this._success.next("Carrinho atualizado");
  }

  shopCartContains() : number {
    const shopCart = this.scs.getShopCart();

    return shopCart[this.product._id] ? shopCart[this.product._id].amount : 0;
  }

};
