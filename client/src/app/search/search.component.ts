import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../integrations/products/products.service";
import {Product} from "../integrations/products/products";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: Product[];

  constructor(private productService: ProductsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const query = params.get('searchQuery');
        return this.productService.searchProducts(query);
      })
      .subscribe((products: Product[]) => {
        this.searchResults = products;
      });
  }
}
