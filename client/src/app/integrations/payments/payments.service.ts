import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Payments} from "./payments";

const GROUP_ID: string = '3';

@Injectable()
export class ProductsService {

  private url = 'https://orangopag.herokuapp.com/index.php/api/Transacoes';

  constructor(private http: Http) { }

  createTransactionBoleto(): Promise<TransactionResponse[]> {

  }

