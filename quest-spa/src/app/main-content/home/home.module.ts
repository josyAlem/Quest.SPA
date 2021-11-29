import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from 'src/app/ng-material.module';
import { CartComponent } from './cart/cart.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgMaterialModule

  ],
  exports: [HomeComponent]
})
export class HomeModule { }
