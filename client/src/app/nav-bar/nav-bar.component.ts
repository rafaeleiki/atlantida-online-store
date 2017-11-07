import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  private query: string;

  constructor(private router: Router) { }

  searchProducts() {
    this.router.navigate(['/search/', this.query]);
  }
}

