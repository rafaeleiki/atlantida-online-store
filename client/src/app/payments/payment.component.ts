
import {Component, OnInit} from '@angular/core';
import {
  OrangoPagBoletoTransactionRequest, OrangoPagCreditTransactionRequest,
  OrangoPagDebitTransactionRequest
} from "../integrations/payments/payments";
import {PaymentsService} from "../integrations/payments/payments.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  private boleto: OrangoPagBoletoTransactionRequest;
  private credit: OrangoPagCreditTransactionRequest;
  private debit: OrangoPagDebitTransactionRequest;

  constructor(private payment: PaymentsService) { }

  ngOnInit() {
  }

  sendCreditTransaction() {
    
  }
}


export class NgbdDatepickerPopup {
  model;
}
