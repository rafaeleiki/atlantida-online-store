import { TestBed, inject } from '@angular/core/testing';

import { MewketingService } from './mewketing.service';
import {HttpModule} from '@angular/http';

describe('MewketingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MewketingService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([MewketingService],
     (service: MewketingService) => {
    expect(service).toBeTruthy();
  }));

  // it('should send email',
  //   inject([MewketingService],
  //     (service: MewketingService) => {
  //   service.sendEmail('2017-11-17T21:25:35.516Z', 'Oi leilaaaadasuyudsaudfasyudfaudyufasd','Email de teste', ['guilherme'],
  //     {
  //       vars: ["email", "nome"],
  //       values: [{email:"zwanziger@live.com", nome:"leils"}]
  //     })
  //     .then((res) => {
  //     console.log(res);
  //     expect(res.status == "Email sent" || res.status == "Email schedule").toBeTruthy();
  //     });
  // }));

  // it('should create a receiver',
  //   inject([MewketingService],
  //     (service: MewketingService) => service.createReceiver('teste', 'teste@teste.com')
  //       .then(res => expect(res.status).toEqual('Receiver created'))
  //   ));

  //
  // it('should add receiver to group',
  //   inject([MewketingService],
  //     (service: MewketingService) => service.joinGroup('Rolezeiros', 'teste@teste.com')
  //       .then(res => expect(res.status).toEqual('Receiver added to group'))
  //   ));

  //
  // it('should remove receiver from group',
  //   inject([MewketingService],
  //     (service: MewketingService) => service.exitGroup('Rolezeiros', 'teste@teste.com')
  //       .then(res => expect(res.status).toEqual('Receiver removed from group'))
  //   ));
  //
  // it('should update a receiver',
  //   inject([MewketingService],
  //     (service: MewketingService) => service.updateReceiver('teste', 'teste2', 'teste2@teste.com')
  //       .then(res => expect(res.status).toEqual('Receiver updated'))
  //   ));
  //
  // it('should remove a receiver',
  //   inject([MewketingService],
  //     (service: MewketingService) => service.removeReceiver('teste2')
  //       .then(res => expect(res.status).toEqual('Receiver removed'))
  //   ));
});
