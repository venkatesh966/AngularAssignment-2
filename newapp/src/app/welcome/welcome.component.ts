import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/loginservices/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  
})
export class WelcomeComponent implements OnInit {

  constructor(private _service:LoginService) { }

  ngOnInit() {
   
  }
  logout():void {
    this._service.logout();
  }
}


