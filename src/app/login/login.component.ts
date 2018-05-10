import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userdataService: UserdataService) {
  }

  facebookLogin() {
    this.userdataService.facebookLogin();
  }

  ngOnInit() {
  }

}
