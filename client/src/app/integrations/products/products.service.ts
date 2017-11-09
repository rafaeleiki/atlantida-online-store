import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Product} from "./products";

const GROUP_ID: string = '3';

export interface Filter {
  attribute: string;
  values: FilterValue[];
}

export interface FilterValue {
  name: string;
  include: boolean;
}

@Injectable()
export class ProductsService {

  private url = 'http://ec2-54-207-63-160.sa-east-1.compute.amazonaws.com:3000/products';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Product[])
      .then(products => products.filter(product => product.group === GROUP_ID))
      .catch((error) => {
        console.error('Error on get products', error);
        return Promise.reject(error.message || error);
      });
  }

  getProduct(id: string): Promise<Product> {
    return this.http.get(this.url + `/${id}`)
      .toPromise()
      .then(response => response.json() as Product)
      .catch((error) => {
        console.error(`Error on get product with ID ${id}`, error);
        let promise;
        if (error.status) {
          promise = Promise.resolve(null);
        } else {
          promise = Promise.reject(error.message || error);
        }
        return promise;
      });
  }

  searchProducts(query: string): Promise<Product[]> {
    query = query.toLowerCase();
    return this.getProducts()
      .then((products) => this.searchByQuery(query, products));
  }

  getFilteredProducts(filter: Filter[], query: string) {
    query = query.toLowerCase();
    const queryParams = filter.map(f => {
      const values = [];
      f.values.forEach(value => {
        if (value.include) {
          values.push(`${f.attribute}=${value.name}`);
        }
      });
      return values.join('&');
    });

    return this.http.get(this.url + '?' + queryParams.join('&'))
      .toPromise()
      .then(response => response.json() as Product[])
      .then(products => this.searchByQuery(query, products))
      .catch((error) => {
        console.error(`Error on get filtered products`, error);
        let promise;
        if (error.status) {
          promise = Promise.resolve(null);
        } else {
          promise = Promise.reject(error.message || error);
        }
        return promise;
      });
  }

  getHighlightedProducts(): Promise<Product[]> {
    return this.getProducts()
      .then(products => products.filter(product => product.highlighted));
  }

  private queryMatches(query: string, product: Product): boolean {
    return product.group === GROUP_ID &&
           product.name.toLowerCase().indexOf(query) >= 0;
  }

  private searchByQuery(query: string, products: Product[]): Product[] {
    if (query !== '*') {
      products = products.filter(product => this.queryMatches(query, product));
    }
    return products;
  }
}
