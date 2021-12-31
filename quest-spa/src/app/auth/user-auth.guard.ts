import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authSvc: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkDefaultGuard();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkDefaultGuard();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkDefaultGuard();
  }

  private checkDefaultGuard() {
    return this.authSvc.isAuthenticated
      .pipe(take(1),
        switchMap(isAuth => {
          if (!isAuth)
            return this.authSvc.autoLogin();
          else
            return of(isAuth);
        }),
        tap(isAuth => {
          if (!isAuth)
            this.authSvc.goToLoginPage();
        }));

  }
}
