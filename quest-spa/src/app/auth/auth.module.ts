import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from '../ng-material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgMaterialModule

  ],
  exports: [

  ]
})
export class AuthModule { }
