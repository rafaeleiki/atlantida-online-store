import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Product, ProductsService} from '../integrations/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product: Product;
  private amountPossibilities = [];
  private reviews = [
    { user: "leila", title: "achei um lixo", body: "muito bom amei", review: 10 },
    { user: "eiki", title: "gostei", body: "que tiroooo pisa menos 10/10", review: 8 },
  ];
  private averageReview: number;
  private pictures = [
    'assets/img/guilherme.jpeg','assets/img/leila.jpeg','assets/img/eiki.jpeg',
    'assets/img/lamas.jpeg','assets/img/tales.jpeg'
  ];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productsService.getProduct(params.get('id')))
      .subscribe((product: Product) => {
      this.product = product;
      this.setReviews();
    });
  }

  setReviews() {
    let arraySize = Math.min(this.product.stock, 10);
    this.amountPossibilities = Array(arraySize).fill(0).map((val, i) => i + 1);

    let sum = this.reviews.reduce((sum, review) => sum + review.review, 0);
    this.averageReview = sum / this.reviews.length;
  }
};
