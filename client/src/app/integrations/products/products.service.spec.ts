import { TestBed, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import {HttpModule} from '@angular/http';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to get a product',
    inject([ProductsService],
      (service: ProductsService) => {
    service.getProducts()
      .then((products) => expect(products.length).toBeGreaterThan(0));
  }));
});
