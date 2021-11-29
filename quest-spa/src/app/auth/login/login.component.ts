import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authSvc: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this._authSvc.login().subscribe(c => {
      alert("Logged in");
    });



  }
}
