import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../../ng-material.module';
import { adminRoutes } from './admin-routes';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    CatalogComponent,
    ReportComponent,
    CartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    NgMaterialModule
  ]
})
export class AdminModule { }
