import { Routes } from '@angular/router';
import { AdminAuthGuard } from 'src/app/auth/admin-auth.guard';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';

export const adminRoutes: Routes =
  [
    {
      path: "admin/dashboard", component: DashboardComponent,
      canActivate: [AdminAuthGuard]
    },
    {
      path: "admin/cart", component: CartComponent,
      canActivate: [AdminAuthGuard]
    },
    {
      path: "admin/catalog", component: CatalogComponent,
      canActivate: [AdminAuthGuard]
    },
    {
      path: "admin/report", component: ReportComponent,
      canActivate: [AdminAuthGuard]
    },
    {
      path: "admin", redirectTo: "admin/dashboard"
    },

  ];

