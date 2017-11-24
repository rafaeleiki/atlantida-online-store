import { Component, OnInit } from '@angular/core';
import {UserAddress} from '../../integrations/clients/client.api';
import {ClientService} from '../../integrations/clients/client.service';
import {UserService} from '../user.service';
import {User} from '../user.d';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  private cep: string;
  private num: number;
  private user: User;
  constructor(private userService: UserService, private clientService: ClientService) { }

  ngOnInit(){
    this.userService.getUserObservable()
      .subscribe(user => { this.userService.getUserInfo(user.id)
        .then(user2 => { this.user = user2
        });
      });
  }

  removeAddress(id:string){
    this.clientService.removeAddress(id)
  }

  addAddress(){
    this.clientService.addAddress(this.user.id, this.cep, this.num )
      .then( address => { alert(address.CEP) });
  }

}
