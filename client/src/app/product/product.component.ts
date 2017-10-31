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
private nums = [];
private currentRate = 3;
private reviews = [
  {user: "leila", title: "achei um lixo", body: "muito bom amei", review: 10, array:[]},
  {user: "eiki", title: "gostei", body: "que tiroooo pisa menos 10/10", review: 8,array:[] }
]
private finalreview = [];
private pictures = ['assets/img/guilherme.jpeg','assets/img/leila.jpeg','assets/img/eiki.jpeg',
'assets/img/lamas.jpeg','assets/img/tales.jpeg'];


constructor(
private route: ActivatedRoute,
private productsService: ProductsService) {
}

ngOnInit() {
this.route.paramMap
.switchMap((params: ParamMap) => this.productsService.getProduct(params.get('id')))
.subscribe((product: Product) => {
this.product = product;
for(let i = 1; i<= Math.min(this.product.stock, 10); i++){
  this.nums.push(i);
}
var sum = 0
for (var i = 0; i < this.reviews.length; i++) {
  sum += this.reviews[i].review;
  for (var j = 0; j < this.reviews[i].review; j++) {
    this.reviews[i].array.push(1);
  }
  for (var j = 0; j < (10-this.reviews[i].review); j++) {
    this.reviews[i].array.push(0);
  }
}
sum = sum/i;
for (var j = 0; j < sum; j++) {
  this.finalreview.push(1);
}
for (var j = 0; j < (10-sum); j++) {
  this.finalreview.push(0);
}
});
}

};
