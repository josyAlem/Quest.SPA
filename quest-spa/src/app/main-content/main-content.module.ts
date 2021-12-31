import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { NgMaterialModule } from '../ng-material.module';
import { AdminModule } from './admin/admin.module';
import { CartComponent } from './cart/cart.component';
import { mainContentRoutes } from './main-content-routes';
import { MainContentComponent } from './main-content.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    MainContentComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainContentRoutes),
    LayoutModule,
    AdminModule,
    NgMaterialModule
  ],
  exports: [
    MainContentComponent
  ]
})
export class MainContentModule { }
