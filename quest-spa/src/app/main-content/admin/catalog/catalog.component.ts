import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { AppConfigService } from 'src/app/config/app-config-service';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  constructor(private _http: HttpClient, private _appConfig: AppConfigService) { }

  ngOnInit(): void {

  }
  check() {

    const url: string =
      this._appConfig.settings.APIBaseUrl + "/catalog/check";
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
