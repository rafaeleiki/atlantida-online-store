import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(user => this.user = user);
  }

}
