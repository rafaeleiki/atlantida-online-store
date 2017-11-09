import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../integrations/products/products.service";
import {Product} from "../integrations/products/products";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ordering: string;
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

  orderBy() {
    if (this[this.ordering]) {
      this.searchResults = this[this.ordering](this.searchResults);
    }
  }

  sortAsc(products: Product[]): Product[] {
    return products.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortDsc(products: Product[]): Product[] {
    return products.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortAscVal(products: Product[]): Product[] {
    return products.sort((a, b) => a.price - b.price);
  }

  sortDscVal(products: Product[]): Product[] {
    return products.sort((a, b) => b.price - a.price);
  }
}
