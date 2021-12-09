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
    this._authSvc.autoLogin().subscribe(c => {
      if (c == true) {
        //  alert("Auto Logged in");
      }
    });
  }
  login() {
    var payload = {
      username: "test2@test.com",
      password: "123456",
    };
    return this._authSvc.login(payload).subscribe(c => {
      alert("Logged in");
    });

  }
  logout() {
    this._authSvc.logout();
  }
}
