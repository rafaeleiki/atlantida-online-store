import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { ShopCartService } from "../shopcart/shopcart.service";
import { Subscription }   from 'rxjs/Subscription';
import {UserService} from '../user/user.service';
import {User} from '../user/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  private user: User;
  private query: string;
  private shopCartAmount : number;
  private subscription: Subscription;
  private userSubscription: Subscription;

  constructor(
    private router: Router,
    private scs : ShopCartService,
    private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.scs.shopCartAmount.subscribe((shopCartAmount : number) => {
      this.shopCartAmount = shopCartAmount;
    });
    this.userSubscription = this.userService.getUserObservable()
      .subscribe(user => this.user = user);
  }

  searchProducts() {
    this.router.navigate(['/search/', this.query]);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
