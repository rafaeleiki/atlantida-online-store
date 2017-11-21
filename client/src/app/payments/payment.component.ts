
import {Component, OnInit} from '@angular/core';
import {TransactionRequest, TransactionReturn} from "../integrations/payments/payments";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  private transactionRequest: TransactionRequest;
  private transactionReturn: TransactionReturn;

  ngOnInit() {

  }
}

