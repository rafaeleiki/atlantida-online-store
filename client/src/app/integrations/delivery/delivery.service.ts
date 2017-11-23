import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {
  CancelPackageRes, GetAllPackagesRes, GetPriceDateParam, GetPriceDateRes, GetStatusPackageRes, PostPackageParam,
  PostPackageRes
} from "./delivery";

const GROUP_ID: number = 4;

@Injectable()
export class DeliveryService {

  private url = "http://site-env.mxvnckfmbb.us-east-2.elasticbeanstalk.com/api";

  constructor(private http: Http) { }

  getAllPackages(): Promise<GetAllPackagesRes[]> {
    return this.http.get(this.url + "/envio")
      .toPromise()
      .then(response => (response.json() as GetAllPackagesRes[])
        .filter(singlePackage => singlePackage.id_site === GROUP_ID))
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }

  getPriceDate(deliveryInfo: GetPriceDateParam): Promise<GetPriceDateRes> {
    deliveryInfo["id_site"] = GROUP_ID;
    return this.http.get(this.url + "/consulta",{params : deliveryInfo})
      .toPromise()
      .then(response => response.json() as GetPriceDateRes)
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }

  postPackage(packageInfo: PostPackageParam): Promise<PostPackageRes> {
    let param = `id_site=${GROUP_ID}&` +
      ['destinatario', 'volume', 'volume', 'destino_cep', 'destino_numero',
        'destino_estado', 'destino_cidade', 'destino_endereco']
      .map((key) => `${key}=${packageInfo[key]}`).join('&');
    return this.http.post(this.url + "/envio?" + param, {})
      .toPromise()
      .then(response => response.json() as PostPackageRes)
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }

  cancelPackage(package_id: number): Promise<CancelPackageRes> {
    return this.http.put(this.url + `/envio/${package_id}/cancela`, {})
      .toPromise()
      .then(response => response.json() as CancelPackageRes)
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }

  getStatusPackage(package_id: number): Promise<GetStatusPackageRes> {
    return this.http.get(this.url + `/envio/${package_id}`)
      .toPromise()
      .then(response => response.json() as GetStatusPackageRes)
      .catch(error => {
        console.log(error);
        return Promise.reject(error.message || error);
      });
  }
}
