import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppConfigService, loadConfig } from './config/app-config-service';
import { AppHttpConfigInterceptor } from './config/app.httpconfig.interceptor';
import { MainContentModule } from './main-content/main-content.module';
import { NgMaterialModule } from './ng-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MainContentModule,
    AuthModule,
    NgMaterialModule
  ],
  providers: [
    {
      provide: 'appConfigPath',
      useValue: './assets/app-settings.json'
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpConfigInterceptor,
      multi: true,
    }

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
