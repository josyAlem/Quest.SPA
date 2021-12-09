import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminRoutes } from './admin/admin-routing.module';
import { homeRoutes } from './home/home-routing.module';
import { ProfileComponent } from './profile/profile.component';

export const mainContentRoutes: Routes =
  [{ path: "home", children: homeRoutes },
  { path: "admin", children: adminRoutes },
  { path: "profile", component: ProfileComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home", pathMatch: "full" }
  ];

@NgModule({
  imports: [RouterModule.forRoot(mainContentRoutes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule { }
