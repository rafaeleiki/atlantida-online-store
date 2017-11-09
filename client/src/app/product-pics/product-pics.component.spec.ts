import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPicsComponent } from './product-pics.component';

describe('ProductPicsComponent', () => {
  let component: ProductPicsComponent;
  let fixture: ComponentFixture<ProductPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPicsComponent ]
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
