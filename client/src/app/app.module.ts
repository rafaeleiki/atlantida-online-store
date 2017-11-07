import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import {ProductsService} from './integrations/products/products.service';
import {HttpModule} from '@angular/http';
import { ProductComponent } from './product/product.component';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { StarsComponent } from './product/stars/stars.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'search/:searchQuery', component: SearchComponent },
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
    ProductComponent,
    LoadingIconComponent,
    StarsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
