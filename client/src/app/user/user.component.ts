import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(user => this.user = user );
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
