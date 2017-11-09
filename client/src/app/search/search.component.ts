import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../integrations/products/products.service";
import {Product} from "../integrations/products/products";
import {ActivatedRoute, ParamMap} from "@angular/router";

interface Attribute {
  attribute: string;
  values: AttributeValue[];
}

interface AttributeValue {
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
  attributes: Attribute[];
  productAttributes: string[] = ['brand', 'year'];
  attributesTranslation: string[] = ['Marca', 'Ano'];

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

        this.attributes = this.productAttributes.map((attribute) => {
          let values = Array.from(new Set(products.map(p => p[attribute])));
          values = values.map(value => ({ name: value, include: true }));
          return {
            attribute,
            values,
          };
        });
      });
  }

  orderBy() {
    if (this[this.ordering]) {
      this[this.ordering]();
    }
  }

  filter() {
    this.products = this.searchResults;
    this.attributes.forEach(attribute => attribute.values.forEach(value => {
      if (!value.include) {
        this.products = this.products.filter(product => product[attribute.attribute] !== value.name);
      }
    }));
  }

  translate(value: string) {
    return this.attributesTranslation[this.productAttributes.indexOf(value)];
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
