import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

export interface Product {
  _id: string;
  name: string;
  category: string;
  color: string;
  year: number;
  weight: number;
  enabled: boolean;
  stock: number;
  dimensions: number[];
  brand: string;
  model: string;
}

@Injectable()
export class ProductsService {

  private url = 'http://private-anon-708cfd65fd-mc437product.apiary-mock.com/products';

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Product[])
      .catch((error) => {
        console.error('Error on get products', error);
        return Promise.reject(error.message || error);
      });
  }

  getProduct(id: string): Promise<Product> {
    return this.http.get(this.url + `/PRODUCTID`)
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

}
