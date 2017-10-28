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

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productsService.getProduct(params.get('id')))
      .subscribe((product: Product) => {
        this.product = product;
      });
  }

}
