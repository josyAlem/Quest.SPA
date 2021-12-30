import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AppConfigService } from '../config/app-config-service';
import { authData, AuthDataStore } from './model/auth-data.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  authData$!: BehaviorSubject<authData | null>;
  autoLogoutTimeOut: any;

  constructor(private _http: HttpClient, private _appConfig: AppConfigService) {
    this.authData$ = new BehaviorSubject<authData | null>(null);
  }

  login(payload: any): Observable<void> {
    payload.clientId = this._appConfig.settings.APIKey;
    const url: string = this._appConfig.settings.APIBaseUrl + environment.auth.login;
    return this._http.post(url, payload)
      .pipe(map((t) => {
        console.log("login successful");
        const jsonConvert = new JsonConvert();
        var authModel: AuthDataStore = jsonConvert.deserializeObject(t, AuthDataStore);
        authModel.loginDate = new Date();
        var authDataObj = new authData(authModel);
        this.authData$.next(authDataObj);
        this.autoLogout(authDataObj.tokenDuration);
        localStorage.setItem('authmodel', JSON.stringify(authModel));
        return;
      }), catchError((err: HttpErrorResponse) => {
        return throwError(() => new Error(this.parseError(err)));
      }));

  }

  logout() {
    if (this.autoLogoutTimeOut) {
      clearTimeout(this.autoLogoutTimeOut);
    }
    this.authData$.next(null);

    localStorage.removeItem('authmodel');
    //go to login page
  }

  autoLogin(): Observable<boolean> {
    const authModelFromStorage: string | null = localStorage.getItem('authmodel');
    if (authModelFromStorage != null) {
      var authModel: AuthDataStore = JSON.parse(authModelFromStorage.toString());
      var authDataObj = new authData(authModel);
      if (authDataObj.token != null) {
        this.authData$.next(authDataObj);
        this.autoLogout(authDataObj.tokenDuration);
        return of(true);
      }
    }

    return of(false);
  }

  get authToken(): Observable<string | null> {
    return this.authData$.asObservable().pipe(map(c => {
      if (c == null) { return null; }
      else { return c.token; }
    }));
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authData$.asObservable().pipe(map(c => {
      if (c != null && c.token != null) {
        return true;
      }
      else {
        return false;
      }
    }));
  }

  autoLogout(duration: number) {
    if (this.autoLogoutTimeOut) {
      clearTimeout(this.autoLogoutTimeOut);
    }
    this.autoLogoutTimeOut = setTimeout(() => {
      this.logout();

    }, duration);
  }
  parseError(error: any): string {
    if (error != null) {
      if (error.error && error.error.error_description)
        return error.error.error_description;
      else
        return error.message;
    }

    return '';
  }
}
