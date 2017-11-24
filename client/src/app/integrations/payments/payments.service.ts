import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {
  OrangoPagBoletoTransactionRequest,
  OrangoPagConsultTransactionReturn,
  OrangoPagCreateTransactionReturn,
  OrangoPagConsultTransactionListRequest, CreateTransactionReturn,
} from './payments';
import {OrangoPagConsultTransactionRequest} from './payments';
import {OrangoPagCreditTransactionRequest, OrangoPagDebitTransactionRequest, ConsultTransactionReturn} from "./payments";

@Injectable()
export class PaymentsService {

  private url = 'https://orangopag.herokuapp.com/index.php/api/Transacoes';

  constructor(private http: Http) { }

  getTransaction(transaction: OrangoPagConsultTransactionRequest): Promise<ConsultTransactionReturn> {
    return this.http.get(this.url, {params: transaction})
      .toPromise()
      .then(response => {
        const orangoPagConsultTransactionReturn = response.json() as OrangoPagConsultTransactionReturn;
        return {
          id: orangoPagConsultTransactionReturn.ID,
          transaction_state: orangoPagConsultTransactionReturn.estado_transacao,
          payment_type: orangoPagConsultTransactionReturn.tipo_pagamento,
          date: orangoPagConsultTransactionReturn.data,
          total_value: orangoPagConsultTransactionReturn.valor_total,
          card_number: orangoPagConsultTransactionReturn.numero_cartao,
          withdraw_name: orangoPagConsultTransactionReturn.nome_sacado,
          withdraw_cpf: orangoPagConsultTransactionReturn.cpf_sacado
        };
      })
      .catch((error) => {
        console.error('Error on getting the transaction', error);
        return Promise.reject(error.message || error);
      });
  }

  getTransactions(transaction: OrangoPagConsultTransactionListRequest): Promise<ConsultTransactionReturn[]> {
    return this.http.get(this.url, {params: transaction})
      .toPromise()
      .then(response => {
        const transactionsList = response.json() as OrangoPagConsultTransactionReturn[];
        return transactionsList.map((transactionElement: OrangoPagConsultTransactionReturn) => ({
          id: transactionElement.ID,
          transaction_state: transactionElement.estado_transacao,
          payment_type: transactionElement.tipo_pagamento,
          date: transactionElement.data,
          total_value: transactionElement.valor_total,
          card_number: transactionElement.numero_cartao,
          withdraw_name: transactionElement.nome_sacado,
          withdraw_cpf: transactionElement.cpf_sacado
        }));
      });
  }

  postBoleto(transaction: OrangoPagBoletoTransactionRequest): Promise<CreateTransactionReturn> {
    return this.http.post(this.url, {params: transaction})
      .toPromise()
      .then(response => {
        const orangoPagCreateTransactionReturn = response.json() as OrangoPagCreateTransactionReturn;
        return {
          message: orangoPagCreateTransactionReturn.msg,
          data: orangoPagCreateTransactionReturn.dados,
          extra: orangoPagCreateTransactionReturn.extra
        };
      })
      .catch((error) => {
        console.error('Error on posting the Boleto', error);
        return Promise.reject(error.message || error);
      });
  }

  postCredit(transaction: OrangoPagCreditTransactionRequest): Promise<CreateTransactionReturn> {
    return this.http.post(this.url, {params: transaction})
      .toPromise()
      .then(response => {
        const orangoPagCreateTransactionReturn = response.json() as OrangoPagCreateTransactionReturn;
        return {
          message: orangoPagCreateTransactionReturn.msg,
          data: orangoPagCreateTransactionReturn.dados,
          extra: orangoPagCreateTransactionReturn.extra
        };
      })
      .catch((error) => {
        console.error('Error on posting the Credit Card', error);
        return Promise.reject(error.message || error);
      });
  }

  postDebit(transaction: OrangoPagDebitTransactionRequest): Promise<CreateTransactionReturn> {
    return this.http.post(this.url, {params: transaction})
      .toPromise()
      .then(response => {
        const orangoPagCreateTransactionReturn = response.json() as OrangoPagCreateTransactionReturn;
        return {
          message: orangoPagCreateTransactionReturn.msg,
          data: orangoPagCreateTransactionReturn.dados,
          extra: orangoPagCreateTransactionReturn.extra
        };
      })
      .catch((error) => {
        console.error('Error on posting the Credit Card', error);
        return Promise.reject(error.message || error);
      });
  }
}

