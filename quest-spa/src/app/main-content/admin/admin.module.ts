import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from '../../ng-material.module';
import { AdminRoutingModule } from './admin-routing.module';
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
    AdminRoutingModule,
    NgMaterialModule
  ]
})
export class AdminModule { }
