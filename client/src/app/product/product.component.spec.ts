import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StarsComponent} from './stars/stars.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {ProductsService} from '../integrations/products/products.service';
import {HttpModule} from '@angular/http';
import {ShopCartService} from '../shopcart/shopcart.service';
import {ProductPicsComponent} from '../product-pics/product-pics.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        StarsComponent,
        ProductPicsComponent,
      ],
      imports: [
        FormsModule,
        SharedModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([]),
        HttpModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ProductsService,
        ShopCartService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
