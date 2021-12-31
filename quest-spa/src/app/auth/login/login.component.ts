import { Component, OnInit } from '@angular/core';
import { formSubmitType } from 'studio-ui-tmpl';
import { AuthService } from '../auth.service';
import { LoginModel } from '../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _authSvc: AuthService) { }

  //#region studio-ui-tmpl varables
  formData: any;
  formSubmitType: formSubmitType = formSubmitType.NEW;
  dataModel = new LoginModel().getDataModel();
  submitFormTitle: string = "Login";
  //#endregion

  ngOnInit(): void {
    this._authSvc.autoLogin().subscribe(c => {
      if (c == true) {
        //  alert("Auto Logged in");
      }
    });
  }

  submitForm(formValue: JSON) {
    this.login(formValue);
  }
  login(payload: any) {
    return this._authSvc.login(payload).subscribe({
      next: () => {
        //alert("Logged in");
        this._authSvc.isAdmin.subscribe({
          next: (result) => {
            if (result === true) this._authSvc.goToAdminPage();
            else
              this._authSvc.goToHomePage();
          }
        });
      }
      , error: (error: Error) => {
        alert("Login failed! " + error.message);
      }
    });

  }

  logout() {
    this._authSvc.logout();
    this._authSvc.goToHomePage();
  }

}
