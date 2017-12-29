import { Component } from '@angular/core';

import {UserComponent} from "../user/user.component";
import { LoginService } from './loginservices/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent {
  public user = new UserComponent('','');
  public errorMsg = '';

  constructor(private _service:LoginService) { }

  login() {
    if(!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }
}
