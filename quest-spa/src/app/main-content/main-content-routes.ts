import { Routes } from "@angular/router";
import { AdminAuthGuard } from "../auth/admin-auth.guard";
import { UserAuthGuard } from '../auth/user-auth.guard';
import { CartComponent } from "./cart/cart.component";
import { MainContentComponent } from "./main-content.component";
import { ProfileComponent } from "./profile/profile.component";

export const mainContentRoutes: Routes =
  [
    { path: "", component: MainContentComponent },
    { path: "cart", component: CartComponent, canActivate: [UserAuthGuard] },
    {
      path: "admin",
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      canActivate: [AdminAuthGuard]
    },
    { path: "profile", component: ProfileComponent, canActivate: [UserAuthGuard] },
  ];