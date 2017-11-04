import { Component, OnInit } from '@angular/core';
import {Product, ProductsService} from '../integrations/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
      .then(products => {
        this.products = products;
      });
  }

}
