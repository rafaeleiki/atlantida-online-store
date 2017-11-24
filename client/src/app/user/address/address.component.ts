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

  private user: User;
  constructor(private userService: UserService, private clientService: ClientService) { }

  ngOnInit(){
    this.userService.getCurrentUser()
      .then(user => {
        this.user = user;
      });
  }


  removeAddress(id:string){
    this.clientService.removeAddress(id);
  }

  addAddress(CEP:string, housenumber: number){
    this.clientService.addAddress(this.user.id, CEP, housenumber );
  }

}
