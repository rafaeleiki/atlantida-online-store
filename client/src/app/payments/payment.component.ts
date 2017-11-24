
import {Component, OnInit} from '@angular/core';
import {
  CreateTransactionReturn,
  OrangoPagBoletoTransactionRequest, OrangoPagCreditTransactionRequest,
  OrangoPagDebitTransactionRequest
} from '../integrations/payments/payments';
import {PaymentsService} from "../integrations/payments/payments.service";
import {SerasaService} from '../integrations/serasa/serasa.service';
import {UserService} from '../user/user.service';
import {SerasaScore} from '../integrations/serasa/serasa';
import {User} from '../user/user';
import {ServerService} from '../server/server.service';
import {ShopCartService} from '../shopcart/shopcart.service';
import {Product} from '../integrations/products/products';
import {ShopCartItem} from '../shopcart/shopcart';
import {DeliveryService} from '../integrations/delivery/delivery.service';

const apiKey = '5e2d5ed388d629742072abd528460bf2';
const cnpj = '57414735000189';
const json = 'JSON';
const boleto = '1';
const credit = '2';
const debit = '3';

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
  private message: string;
  private user: User;
  private shopcart: ShopCartItem[];
  private shippingCost: number;

  constructor(
    private paymentService: PaymentsService,
    private serasaService: SerasaService,
    private userService: UserService,
    private serverService: ServerService,
    private shopCartService: ShopCartService,
    private deliveryService: DeliveryService,
  ) { }

  ngOnInit() {
    this.shopcart = this.shopCartService.getShopCartList();
    this.boleto = {} as OrangoPagBoletoTransactionRequest;
    this.credit = {
      valor_total: this.getTotalCost().toString(10),
      cnpj_loja: '',
      format: 'JSON',
      api_key: apiKey,
      tipo_trans: credit,
      nome_sacado: '',
      cpf_sacado: '',
      numero_cartao: '',
      nome_cartao: '',
      data_expiracao: '',
      codigo_verificacao: '',
      tipo_cartao: '',
      n_parcelas: '',
      valor_parcela: '',
    } as OrangoPagCreditTransactionRequest;
    this.debit = {} as OrangoPagDebitTransactionRequest;

    this.userService.getCurrentUser()
      .then((user: User) => {
        this.user = user;
        this.serasaService.getScore(user.cpf)
            .then((response: SerasaScore) => this.score = response.score);
      });
  }

  createCreditTransaction() {
    this.paymentService.postCredit(this.credit)
      .then(res => {
        this.createPayment(res);
        this.message = res.message;
      });
  }

  createBoletoTransaction() {
    this.paymentService.postBoleto(this.boleto)
      .then(res => {
        this.createPayment(res);
        this.message = res.message
      });
  }

  createDebitTransaction() {
    this.paymentService.postDebit(this.debit)
      .then(res => {
        this.createPayment(res);
        this.message = res.message;
      });
  }

  private getTotalCost(): number {
    return this.shopcart.reduce((cost, item) => cost + item.price * item.amount, 0);;
  }

  private createPayment(response: CreateTransactionReturn) {
    const totalCost = this.getTotalCost();
    const packageInfo = {
      destinatario: this.user.name,
      destino_cep: +this.user.address.cep,
      destino_numero: +this.user.cep,
      destino_estado: this.user.address.estado,
      destino_cidade: this.user.address.cidade,
      destino_endereco: this.user.address.endereco,
      volume: this.shopcart.reduce((vol, item) => item.volume + vol, 0),
    };

    this.shopCartService.clearShopCart();
    this.deliveryService.postPackage(packageInfo)
      .then(deliveryResponse => {
        this.serverService.createPayment({
          cpf: this.user.cpf,
          products: [...this.shopcart],
          sale_date: new Date(),
          total_cost: totalCost,
          payment_id: response.data.id_transacao,
          delivery_id: deliveryResponse.id,
          shipping_cost: this.shippingCost,
        }).then(() => {
          this.message = 'Compra efetuada com suceso!';
        });
      });
  }
}
