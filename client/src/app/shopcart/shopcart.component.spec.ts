import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCartComponent } from './shopcart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShopCartService} from './shopcart.service';

describe('ShopCartComponent', () => {
  let component: ShopCartComponent;
  let fixture: ComponentFixture<ShopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCartComponent ],
      imports: [ NgbModule.forRoot() ],
      providers: [ ShopCartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
