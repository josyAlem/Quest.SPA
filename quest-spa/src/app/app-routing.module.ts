import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainContentRoutes } from './main-content/main-content-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { authRoutes } from './auth/auth-routing.module';

const routes: Routes =
  [{ path: "auth", children:authRoutes },
  { path: "",component:MainContentComponent ,children:mainContentRoutes },
  { path: "**", redirectTo: "", pathMatch: "full" }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
