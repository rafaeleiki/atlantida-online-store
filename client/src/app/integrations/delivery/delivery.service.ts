import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

const GROUP_ID: string = "4";

@Injectable()
export class DeliveryService {

  private url = "site-env.mxvnckfmbb.us-east-2.elasticbeanstalk.com/api";

  constructor(private http: Http) { }

  checkAddressInfo() {


  }
}
