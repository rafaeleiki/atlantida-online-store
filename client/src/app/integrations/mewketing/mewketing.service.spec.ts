import { TestBed, inject } from '@angular/core/testing';

import { MewketingService } from './mewketing.service';

describe('MewketingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MewketingService]
    });
  });

  it('should be created', inject([MewketingService],
     (service: MewketingService) => {
    expect(service).toBeTruthy();
  }));

  it('should send email',
    inject([MewketingService],
      (service: MewketingService) => {
    service.sendEmail(Date.now(), 'Oi leilaaa','Email de teste', ['leila'], {nome:'leila'} )
      .then((mewketingResponse) => expect(mewketingResponse.status).not.toBe(''));
  }));
});
