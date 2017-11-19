import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingHistoryComponent } from './shopping-history.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../user.service';
import {ClientService} from '../../integrations/clients/client.service';
import {HttpModule} from '@angular/http';

describe('ShoppingHistoryComponent', () => {
  let component: ShoppingHistoryComponent;
  let fixture: ComponentFixture<ShoppingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingHistoryComponent ],
      imports: [
        HttpModule,
        NgbModule.forRoot(),
      ],
      providers: [
        UserService,
        ClientService,
      ]
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
