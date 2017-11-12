import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ShopCartService } from "../shopcart/shopcart.service";
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  private query: string;
  private shopCartQnt : number;
  subscription: Subscription;

  constructor(private router: Router, private scs : ShopCartService) {
    this.subscription = this.scs.shopCartQnt.subscribe((shopCartQnt : number) => {
      this.shopCartQnt = shopCartQnt;
    });
  }

  ngOnInit() {

  }

  searchProducts() {
    this.router.navigate(['/search/', this.query]);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
