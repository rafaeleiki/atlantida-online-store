import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPicsComponent } from './product-pics.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('ProductPicsComponent', () => {
  let component: ProductPicsComponent;
  let fixture: ComponentFixture<ProductPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPicsComponent ],
      imports: [
        RouterModule.forRoot([]),
        NgbModule.forRoot(),
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
