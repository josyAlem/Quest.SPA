import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home.component';

export const homeRoutes: Routes =  
[{ path: "", component: HomeComponent },
{ path: "cart", component: CartComponent },
{ path: "**", redirectTo: "", pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
