import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingHistoryComponent } from './shopping-history.component';

describe('ShoppingHistoryComponent', () => {
  let component: ShoppingHistoryComponent;
  let fixture: ComponentFixture<ShoppingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
