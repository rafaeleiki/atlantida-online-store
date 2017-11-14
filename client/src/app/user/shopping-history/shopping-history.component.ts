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
  private salesStatusBar = [
    { percentage: 25, icon: 'local_atm', status: 'Pagamento recebido' },
    { percentage: 50, icon: 'store_mall_directory', status: 'Empacotado' },
    { percentage: 75, icon: 'local_shipping', status: 'Pacote enviado' },
    { percentage: 100, icon: 'done_all', status: 'Entregue' },
  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getShoppingHistory()
      .then(history => this.history = history);
  }

  saleStatus(sale, percentage) {
    const done = sale.statusPercentage >= percentage;
    return {
      'done': done,
      'not-done': !done
    };
  }

}
