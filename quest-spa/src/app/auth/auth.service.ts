import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
    const url: string = this._appConfig.settings.APIBaseUrl + environment.auth.login;

    return this._http.post(url, payload)
      .pipe(map((t) => {
        console.log("logged in ");
        const jsonConvert = new JsonConvert();
        var authmodel: authResponseModel = jsonConvert.deserializeObject(t, authResponseModel);
        localStorage.setItem('authmodel', JSON.stringify(authmodel));
        return;
      }), catchError((err: HttpErrorResponse) => {
        console.error('login failed: ', err);
        return throwError(() => new Error(err.message));
      }));

  }

  logout() {
    localStorage.removeItem('authmodel');
  }
}
