import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ShopCartService} from './shopcart/shopcart.service';
import {UserService} from './user/user.service';
import {ClientService} from './integrations/clients/client.service';
import {HttpModule} from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
      ],
      imports: [
        RouterModule.forRoot([]),
        FormsModule,
        HttpModule,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ShopCartService,
        UserService,
        ClientService,
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render the footer', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.footer')).toBeDefined();
  }));
});
