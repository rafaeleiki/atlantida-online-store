import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {AUTH_ERRORS} from '../integrations/clients/client.service';
import {MewketingService} from "../integrations/mewketing/mewketing.service";

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
    private router: Router,
    private emailService: MewketingService) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.cpf, this.password)
      .then((user) => {
        this.emailService.createReceiver(user.username, user.email);
        this.router.navigate(['/home'])
      })
      .catch((error: string) => {
        if (error == 'ADDRESS_NOT_FOUND')
          this.router.navigate(['/home'])
        this.message = error;
        if (error.indexOf(AUTH_ERRORS.INVALID_CPF) >= 0) {
          this.message = 'CPF inválido';
        } else if (error.indexOf(AUTH_ERRORS.NOT_FOUND) >= 0) {
          this.message = 'Combinação inválida de usuário / senha';
        } else {
          this.message = 'Ocorreu um erro; tente novamente';
        }
      });
  }

}
