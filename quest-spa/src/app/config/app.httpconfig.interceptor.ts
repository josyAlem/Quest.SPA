import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { authResponseModel } from '../auth/authModel';
import { AppConfigService } from './app-config-service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppHttpConfigInterceptor implements HttpInterceptor {
    constructor(private _appConfig: AppConfigService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const exceptionUrls: string[] = 
        [this. _appConfig.settings.APIBaseUrl + environment.auth.login,
            this. _appConfig.settings.APIBaseUrl + environment.auth.signup]; 
        if(exceptionUrls.includes(request.url.toString()))
        {
            return next.handle(request);
        }
       
        const authModelFromStorage: string | null = localStorage.getItem('authmodel');
        if (authModelFromStorage) {
            const authModel: authResponseModel | null = JSON.parse(authModelFromStorage.toString());
            if (authModel && authModel.accessToken) {
                request = request.clone({
                    headers: request.headers.set('Authorization', 'Bearer ' + authModel.accessToken)
                });
            }
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
            console.error('interceptor failed on handlint event--->>>', data);
            return throwError(() => new Error(error.message));
        }));
    }
}

