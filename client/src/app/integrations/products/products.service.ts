import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Product} from "./products";

const GROUP_ID: string = '3';

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
    const queryMatches = (product) => product.name.toLowerCase().indexOf(query) >= 0;
    return this.getProducts()
      .then((products) => products.filter(product => queryMatches(product)));
  }

  getHighlightedProducts(): Promise<Product[]> {
    return this.getProducts()
      .then(products => products.filter(product => product.highlighted));
  }
}
