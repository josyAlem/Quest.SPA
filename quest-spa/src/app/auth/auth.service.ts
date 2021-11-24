import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppConfigService } from '../config/app-config-service';
import { authResponseModel } from './model/auth-response.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _http: HttpClient, private _appConfig: AppConfigService) {

  }

  login() {
    var payload = {
      username: "test2@test.com",
      password: "123456",
      clientId: this._appConfig.settings.APIKey
    };
    const url: string =
      this._appConfig.settings.APIBaseUrl + environment.auth.login;
    this._http.post(url, payload)
      .pipe(tap(() => {
        console.log("logged in ");
        return;
      }
      ), catchError((err: HttpErrorResponse) => {
        console.error('login failed: ', err);
        return throwError(() => new Error(err.message));
      })).subscribe((t) => {
        const jsonConvert = new JsonConvert();
        var authmodel: authResponseModel = jsonConvert.deserializeObject(t, authResponseModel);
        //console.info("Logged in...deserialized..."+ JSON.stringify(authmodel));
        localStorage.setItem('authmodel', JSON.stringify(authmodel));
      });

  }
  validate() {

    const url: string =
      this._appConfig.settings.APIBaseUrl + environment.auth.validate;
    this._http.get(url,).pipe(tap(() => {
      console.log("authenticated");
      return;
    }
    ), catchError((err: HttpErrorResponse) => {
      console.error('validate failed: ', err);
      return throwError(() => new Error(err.message));
    })).subscribe();
  }
  logout() {
    localStorage.removeItem('authmodel');
  }
}
