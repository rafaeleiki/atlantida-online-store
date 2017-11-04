import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../integrations/products/products.service";
import {Product} from "../integrations/products/products";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.searchProducts('Calculadora')
      .then(products => {
        this.searchResults = products;
      });
  }

}
