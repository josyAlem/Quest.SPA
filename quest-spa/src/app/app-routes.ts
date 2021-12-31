import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./main-content/main-content.module').then(m => m.MainContentModule)
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

