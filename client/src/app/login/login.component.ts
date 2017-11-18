import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {AUTH_ERRORS} from '../integrations/clients/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private cpf: string;
  private password: string;
  private message: string;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.cpf, this.password)
      .then(() => this.router.navigate(['/home']))
      .catch((error) => {
      this.message = error;
        // switch (error) {
        //   case AUTH_ERRORS.INVALID_CPF:
        //     this.message = 'CPF inválido';
        //     break;
        //   default: this.message = 'Ocorreu um erro';
        // }
      });
  }

}
