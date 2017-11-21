import {PaymentsService} from "./payments.service";
import {inject, TestBed} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {async} from "q";

describe('PaymentsService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule( {
      providers: [PaymentsService],
      imports: [HttpModule]
    });
  });

  it('should be created',
    inject()
    )
});
