import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {
  BoletoTransactionRequest,
  ConsultTransactionListRequest,
  ConsultTransactionRequest, ConsultTransactionReturn, CreateTransactionReturn, CreditTransactionRequest,
  DebitTransactionRequest,
  OrangoPagConsultTransactionReturn, OrangoPagCreateTransactionReturn, OrangoPagTransactionReturn, Payments,
  TransactionRequest,
  TransactionReturn
} from "./payments";

@Injectable()
export class PaymentsService {

  private url = 'https://orangopag.herokuapp.com/index.php/api/Transacoes';

  constructor(private http: Http) { }

  getTransaction(transaction: ConsultTransactionRequest): Promise<ConsultTransactionReturn> {
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

  getTransactions(transaction: ConsultTransactionListRequest): Promise<ConsultTransactionReturn[]> {
    return this.http.get(this.url, {params: transaction})
      .toPromise()
      .then(response => {
        const orangoPagConsultTransactionReturn = response.json() as OrangoPagConsultTransactionReturn[];
        return {
          id: orangoPagConsultTransactionReturn.ID,
          transaction_state: orangoPagConsultTransactionReturn.estado_transacao,
          payment_type: orangoPagConsultTransactionReturn.tipo_pagamento,
          date: orangoPagConsultTransactionReturn.data,
          total_value: orangoPagConsultTransactionReturn.valor_total,
          card_number: orangoPagConsultTransactionReturn.numero_cartao,
          withdraw_name: orangoPagConsultTransactionReturn.nome_sacado,
          withdraw_cpf: orangoPagConsultTransactionReturn.cpf_sacado
        }
      })
  }

  postBoleto(transaction: BoletoTransactionRequest): Promise<CreateTransactionReturn> {
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

  postCredit(transaction: CreditTransactionRequest): Promise<CreateTransactionReturn> {
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

  postDebit(transaction: DebitTransactionRequest): Promise<CreateTransactionReturn> {
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

