import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {CepService} from '../../integrations/cep/cep.service';
import {Address} from '../../integrations/cep/cep';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: User;
  private loading: boolean;

  constructor(private userService: UserService, private cepService: CepService) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .then(user => {
        this.user = user;
        if (!this.user.address) {
          this.user.address = {
            bairro: '',
            cep: '',
            cidade: '',
            endereco: '',
            numeros: {
              min: '',
              max: ''
            },
            estado: '',
          };
        }
      });
  }

  getAddress() : void {
    this.loading = true;
    this.cepService.getAddress(this.user.cep)
    .then((address : Address) => {
      this.user.address = address;
      this.loading = false;
    })
    .catch((error) => {
      console.error('Error on get cep', error);
      this.loading = false;
      return Promise.reject(error.message || error);
    });
  }

}
