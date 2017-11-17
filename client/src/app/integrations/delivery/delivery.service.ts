import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {
  CancelPackageRes, GetPriceDateParam, GetPriceDateRes, GetStatusPackageRes, PostPackageParam,
  PostPackageRes
} from "./delivery";

const GROUP_ID: number = 4;

@Injectable()
export class DeliveryService {

  private url = "site-env.mxvnckfmbb.us-east-2.elasticbeanstalk.com/api";

  constructor(private http: Http) { }

  getPriceDate(deliveryInfo: GetPriceDateParam): Promise<GetPriceDateRes> {
    deliveryInfo["id_site"] = GROUP_ID;
    return this.http.get(this.url + "/consulta",{params : {deliveryInfo}})
    .toPromise()
    .then(response => response.json() as GetPriceDateRes)
    .catch(error => console.log(error));
  }

  postPackage(packageInfo: PostPackageParam): Promise<PostPackageRes> {
    var param = `id_site=${GROUP_ID}&destinatario=${packageInfo.destinatario}&volume=${packageInfo.volume}
             &destino_cep=${packageInfo.destino_cep}&destino_numero=${packageInfo.destino_numero}
             &destino_estado=${packageInfo.destino_estado}&destino_cidade=${packageInfo.destino_cidade}
             &destino_endereco=${packageInfo.destino_endereco}`;
    return this.http.post(this.url + "/envio?" + param, {})
      .toPromise()
      .then(response => response.json() as PostPackageRes)
      .catch(error => console.log(error));
  }

  cancelPackage(package_id: number): Promise<CancelPackageRes> {
    return this.http.put(this.url + `/envio/${package_id}/cancela`, {})
      .toPromise()
      .then(response => response.json() as CancelPackageRes)
      .catch(error => console.log(error));
  }

  getStatusPackage(package_id: number): Promise<GetStatusPackageRes> {
    return this.http.get(this.url + `/envio/${package_id}`)
      .toPromise()
      .then(response => response.json() as GetStatusPackageRes)
      .catch(error => console.log(error));
  }
}
