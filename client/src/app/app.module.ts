import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { HttpModule } from '@angular/http';
import { MewketingService } from './integrations/mewketing/mewketing.service';
import { ClientService } from './integrations/clients/client.service';
import { UserModule } from './user/user.module';
import { ProductsService } from './integrations/products/products.service';
import { SerasaService } from './integrations/serasa/serasa.service';
import { CepService } from './integrations/cep/cep.service';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './product/stars/stars.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import { ProductPicsComponent } from './product-pics/product-pics.component';
import { ShopCartComponent } from './shopcart/shopcart.component';
import { ShopCartService } from './shopcart/shopcart.service';
import { LoginComponent } from './login/login.component';
import {SharedModule} from './shared/shared.module';
import {PaymentsService} from "./integrations/payments/payments.service";
import {PaymentComponent} from './payments/payment.component';
import {ServerService} from './server/server.service';
import {DeliveryService} from './integrations/delivery/delivery.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'products', redirectTo: '/search/*', pathMatch: 'full' },
  { path: 'shopcart', component: ShopCartComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'search/:searchQuery', component: SearchComponent },
  { path: 'shopcart', component: ShopCartComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HelpComponent,
    ShopCartComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    ProductPicsComponent,
    LoginComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    UserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    SharedModule,
  ],
  providers: [
    PaymentsService,
    ClientService,
    ProductsService,
    CepService,
    ShopCartService,
    SerasaService,
    ServerService,
    DeliveryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
