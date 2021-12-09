import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authSvc: AuthService) { }
  _errMessage: string = "";
  _localDataForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this._authSvc.autoLogin().subscribe(c => {
      if (c == true) {
        //  alert("Auto Logged in");
      }
    });

    this._localDataForm.addControl("user_name", new FormControl("", Validators.required));
    this._localDataForm.addControl("user_pwd", new FormControl("", Validators.required));
    this._localDataForm.updateValueAndValidity();

  }
  login() {
    if (!this._localDataForm.valid)
      return;

    var payload = {
      username: this._localDataForm.get("user_name")?.value, //"test2@test.com",
      password: this._localDataForm.get("user_pwd")?.value//"123456",
    };
    return this._authSvc.login(payload).subscribe(c => {
      alert("Logged in");
    }, (error: Error) => {
      alert("Login failed! " + error.message);

    });

  }
  logout() {
    this._authSvc.logout();
  }

  validateForm(fieldName: string): boolean {
    var INVALID = false;
    if (this._localDataForm.get(fieldName) &&
      ((this._localDataForm.get(fieldName)?.touched
        || this._localDataForm.get(fieldName)?.dirty)
        && this._localDataForm.get(fieldName)?.errors)) {

      var error: ValidationErrors | null | undefined = this._localDataForm.get(fieldName)?.errors;
      INVALID = this.getErrorMessage(error);
    }
    return INVALID;
  }

  getErrorMessage(error: ValidationErrors | null | undefined): boolean {
    this._errMessage = "";
    if (error == null)
      return true;

    if (error['required']) {
      this._errMessage = "*Required!";
    }
    else if (error['pattern'])
      this._errMessage = "*Invalid format!";

    else if (error['email']) {
      this._errMessage = "*Invalid format!(Sample: john@gmail.com)";
    }
    else if (error['minlength']) {
      this._errMessage = "*Minimum length allowed is " + error['minlength'].requiredLength + " !";
    }
    else if (error['numRange']) {
      this._errMessage = error['numRange'].message;
    }
    else
      return false;

    return true;
  }
}
