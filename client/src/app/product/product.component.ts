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
});
}

};
