import { Component, OnInit } from '@angular/core';
import {User, UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(user => this.user = user);
  }
}
