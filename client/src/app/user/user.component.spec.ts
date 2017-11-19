import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UserService} from './user.service';
import {ClientService} from '../integrations/clients/client.service';
import {HttpModule} from '@angular/http';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [
        SharedModule,
        HttpModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        UserService,
        ClientService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
