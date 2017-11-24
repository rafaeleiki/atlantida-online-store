import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {CepService} from '../../integrations/cep/cep.service';
import {ClientService} from "../../integrations/clients/client.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: User;
  private loading: boolean;

  constructor(
    private userService: UserService,
    private cepService: CepService,
    private clientService: ClientService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(user => {this.user = user;});
  }

  save() {
    this.clientService.updateInfo(this.user);
  }
}
