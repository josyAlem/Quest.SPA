import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { AppConfigService } from './app-config-service';


@Injectable()
export class AppHttpConfigInterceptor implements HttpInterceptor {
    constructor(private _appConfig: AppConfigService, private _authSvc: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.toString() == this._appConfig.settingsFilePath) {
            return next.handle(request);
        }
        const exceptionUrls: string[] =
            [this._appConfig.settings.APIBaseUrl + environment.auth.login,
            this._appConfig.settings.APIBaseUrl + environment.auth.signup];
        if (exceptionUrls.includes(request.url.toString())) {
            return next.handle(request);
        }

        if (this._authSvc.isAuthenticated) {
            request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + this._authSvc.authToken)
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
            });
        }

        request = request.clone(
            {
                headers: request.headers.set('Accept', 'application/json'),
                responseType: 'json'

            }
        );

        return next.handle(request).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log('interceptor handled event--->>>', event);
            }
            return event;
        }), catchError((error: HttpErrorResponse) => {
            let data = {};
            data = {
                reason: error && error.error && error.error.reason ? error.error.reason : '',
                status: error.status
            };
            console.error('interceptor failed on handling event--->>>', data);
            return throwError(() => new Error(error.message));
        }));
    }
}

