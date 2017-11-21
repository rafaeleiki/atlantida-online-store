import {TestBed, inject, async} from '@angular/core/testing';

import { DeliveryService } from './delivery.service';
import {HttpModule} from '@angular/http';
import {CancelPackageRes, GetPriceDateParam, GetPriceDateRes, PostPackageParam, PostPackageRes} from "./delivery";

describe('DeliveryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([DeliveryService], (service: DeliveryService) => {
    expect(service).toBeTruthy();
  }));

  let gpdp: GetPriceDateParam = {
    destino_endereco: "Alfenas, Jardim Santa Lucia",
    destino_cidade: "Campinas",
    destino_estado: "SP",
    destino_numero: 20,
    destino_cep: 13060482,
    volume: 10000
  };


  let gpdr: GetPriceDateRes = {
    message: "Preço calculado de R$9.90 e tempo estimado de 4 dias",
    preco: 9.9,
    tempo: 4
  };

  it('should be able to get the expected price and delivery date of a package',
    async(inject([DeliveryService],
      (service: DeliveryService) => {
    service.getPriceDate(gpdp)
      .then(res => expect(
        res.message == gpdr.message && res.preco === gpdr.preco && res.tempo === gpdr.tempo
      ).toBeTruthy());
  })));

  let ppp: PostPackageParam = {
    destinatario: "Nos",
    destino_endereco: "Alfenas, Jardim Santa Lucia",
    destino_cidade: "Campinas",
    destino_estado: "SP",
    destino_numero: 20,
    destino_cep: 13060482,
    volume: 10000
  };

  let ppr: PostPackageRes = {
    message: "Novo envio foi postado com sucesso",
    preco: 9.9,
    id: 3
  };

  it('should be able to post a package',
    async(inject([DeliveryService],
      (service: DeliveryService) => {
    service.postPackage(ppp)
      .then(res => expect(
        res.message === ppr.message && res.preco === ppr.preco
      ).toBeTruthy());
  })));

  let cpr: CancelPackageRes = {
    status: "Status foi alterado com sucesso",
    message: "A entrega do pacote foi cancelada"
  };

  it('should be able to cancel a package delivery',
    async(inject([DeliveryService],
      (service: DeliveryService) => {
    service.postPackage(ppp)
      .then(info => service.cancelPackage(info.id)
        .then(res => expect(
          res.status === cpr.status && res.message === cpr.message
        ).toBeTruthy()));
  })));

  it('should be able to get some delivery info',
    async(inject([DeliveryService],
      (service: DeliveryService) => {
    service.postPackage(ppp)
      .then(info => service.getStatusPackage(info.id)
        .then(response => expect(response.status).toEqual(1)));
  })));

  it('should be able to get all packages',
    async(inject([DeliveryService],
      (service: DeliveryService) => {
        service.getAllPackages()
          .then(res => {
            expect(res.length).toBeLessThan(0)
          });
      })));
});
