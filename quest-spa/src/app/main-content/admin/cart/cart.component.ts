import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { AppConfigService } from 'src/app/config/app-config-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _http: HttpClient, private _appConfig: AppConfigService) { }

  ngOnInit(): void {

  }
  check() {

    const url: string =
      this._appConfig.settings.APIBaseUrl + "/cart/check";
    this._http.get(url).pipe(map(() => {
      alert("Api checked");
      return;
    }
    ), catchError((err: HttpErrorResponse) => {
      console.error('validate failed: ', err);
      return throwError(() => new Error(err.message));
    })).subscribe();
  }

}
