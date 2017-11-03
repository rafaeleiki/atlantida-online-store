import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Buy} from '../user';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {

  private history: Buy[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getShoppingHistory()
      .then(history => this.history = history);
  }

}
