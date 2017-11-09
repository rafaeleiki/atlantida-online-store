import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../integrations/products/products.service";
import {Product} from "../integrations/products/products";
import {ActivatedRoute, ParamMap} from "@angular/router";

interface Brand {
  name: string;
  include: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ordering: string;
  searchResults: Product[];
  products: Product[];
  brands: Brand[];

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
        this.products = products;

        const brandNames = Array.from(new Set(products.map(p => p.brand)));
        this.brands = brandNames.map(name => ({ name, include: true }));
      });
  }

  orderBy() {
    if (this[this.ordering]) {
      this[this.ordering]();
    }
  }

  filter() {
    this.products = this.searchResults;
    this.brands.forEach(brand => {
      if (!brand.include) {
        this.products = this.products.filter(product => product.brand !== brand.name);
      }
    });
  }

  sortAsc() {
    this.products = this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortDsc() {
    this.products = this.products.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortAscVal() {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  sortDscVal() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }
}
