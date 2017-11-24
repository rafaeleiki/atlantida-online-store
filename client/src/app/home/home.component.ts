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

  private productsGrid: Product[];
  private productsCarousel: Product[];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getHighlightedProducts()
      .then(products => {
        this.productsGrid = products;
        let s = Math.floor(Math.random() * (products.length - 3));
        this.productsCarousel = products.slice(s, s + 3);
      });
  }

}
