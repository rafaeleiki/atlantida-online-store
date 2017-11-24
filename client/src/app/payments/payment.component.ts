
import {Component, OnInit} from '@angular/core';
import {
  OrangoPagBoletoTransactionRequest, OrangoPagCreditTransactionRequest,
  OrangoPagDebitTransactionRequest
} from "../integrations/payments/payments";
import {PaymentsService} from "../integrations/payments/payments.service";
import {SerasaService} from '../integrations/serasa/serasa.service';
import {UserService} from '../user/user.service';
import {SerasaScore} from '../integrations/serasa/serasa';
import {User} from '../user/user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  private boleto: OrangoPagBoletoTransactionRequest;
  private credit: OrangoPagCreditTransactionRequest;
  private debit: OrangoPagDebitTransactionRequest;
  private score: number;

  constructor(
    private paymentService: PaymentsService,
    private serasaService: SerasaService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.boleto = {} as OrangoPagBoletoTransactionRequest;
    this.credit = {} as OrangoPagCreditTransactionRequest;
    this.debit = {} as OrangoPagDebitTransactionRequest;
    
    this.userService.getCurrentUser()
      .then((user: User) => this.serasaService.getScore(user.cpf)
        .then((response: SerasaScore) => this.score = response.score));
  }

  createCreditTransaction() {

  }

  createBoletoTransaction() {

  }

  createDebitTransaction() {

  }
}
