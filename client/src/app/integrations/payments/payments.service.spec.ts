import {PaymentsService} from './payments.service';
import {inject, TestBed} from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import {async} from 'q';
import {OrangoPagBoletoTransactionRequest, OrangoPagConsultTransactionListRequest,
  OrangoPagConsultTransactionRequest,
  OrangoPagCreditTransactionRequest, OrangoPagDebitTransactionRequest
} from './payments';

describe('PaymentsService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule( {
      providers: [PaymentsService],
      imports: [HttpModule]
    });
  });

  const apiKey = '5e2d5ed388d629742072abd528460bf2';
  const cnpj = '57414735000189';
  const json = 'JSON';
  const boleto = '1';
  const credit = '2';
  const debit = '3';


  const btr: OrangoPagBoletoTransactionRequest = {
    valor_total: '20.50',
    cnpj_loja: cnpj,
    format: json,
    api_key: apiKey,
    tipo_trans: boleto,
    nome_sacado: 'Mauricio de Souza',
    cpf_sacado: '74662210763'
  };
  const ctr: OrangoPagCreditTransactionRequest = {
    valor_total: '329.99',
    cnpj_loja: cnpj,
    format: json,
    api_key: apiKey,
    tipo_trans: credit,
    nome_sacado: 'Renan Carvalho',
    cpf_sacado: '07994544436',
    numero_cartao: '1234123412341234',
    nome_cartao: 'Renan A Carvalho',
    data_expiracao: '2019-07-28',
    codigo_verificaccao: '837',
    tipo_cartao: 'Credito',
    n_parcelas: '2',
    valor_parcela: '179.99'
  };
  const dtr: OrangoPagDebitTransactionRequest = {
    valor_total: '4200.00',
    cnpj_loja: cnpj,
    format: json,
    api_key: apiKey,
    tipo_trans: debit,
    nome_sacado: 'Aparecida dos Santos',
    cpf_sacado: '84821935546',
    numero_cartao: '4321432143214321',
    nome_cartao: 'Aparecida Santos',
    data_expiracao: '2021-02-01',
    codigo_verificaccao: '309',
    tipo_cartao: 'Debito'
  };
  const ctlr: OrangoPagConsultTransactionListRequest = {
    cnpj_loja: cnpj,
    format: json,
    api_key: apiKey
  };
  const ctrr: OrangoPagConsultTransactionRequest = {
    id_trans: 421,
    cnpj_loja: cnpj,
    format: json,
    api_key: apiKey
  };

  it('should create a Boleto transaction',
    async(
      inject([PaymentsService],
        (service: PaymentsService) => {
        service.postBoleto(btr)
          .then(response => expect(
            response.message === 'Transação via boleto criada com sucesso').toBeTruthy());
        })));
  it('should create a Credit Card transaction',
    async(
      inject([PaymentsService],
        (service: PaymentsService) => {
        service.postCredit(ctr)
          .then(response => expect(
            response.message === 'Transação via credito criada com sucesso').toBeTruthy());
        })));
  it('should create a Debit Card transaction',
    async(
      inject([PaymentsService],
        (service: PaymentsService) => {
        service.postDebit(dtr)
          .then(response => expect(response.message)
            .toEqual('Transação via debito criada com sucesso'));
        })));
  it('should receive all transactions from the store',
    async(
      inject([PaymentsService],
        (service: PaymentsService) => {
        service.getTransactions(ctlr)
          .then(response => expect(response.length).toBeGreaterThan(0));
        })));
  it('should receive one transaction',
    async(
      inject( [PaymentsService],
        (service: PaymentsService) => {
        service.getTransaction(ctrr)
          .then(response => expect(response).toBeTruthy());
        })));
});
