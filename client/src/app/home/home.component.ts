import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../integrations/products/products.service';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../integrations/products/products";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private products: Product[];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getHighlightedProducts()
      .then(products => {
        this.products = products;
      });
  }

}
