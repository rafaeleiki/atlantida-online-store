import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';
import {ClientService} from '../../integrations/clients/client.service';
import { AddressComponent } from './address.component';
import {HttpModule} from '@angular/http';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [UserService, ClientService],
      declarations: [ AddressComponent ],
      imports: [ HttpModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
