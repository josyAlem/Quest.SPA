import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ReportComponent } from './report/report.component';

export const adminRoutes: Routes = 
[{ path: "dashboard", component: DashboardComponent },
{ path: "cart", component: CartComponent },
{ path: "catalog", component: CatalogComponent },
{ path: "report", component: ReportComponent },
{ path: "", redirectTo: "dashboard", pathMatch: "full" },
{ path: "**", redirectTo: "dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
