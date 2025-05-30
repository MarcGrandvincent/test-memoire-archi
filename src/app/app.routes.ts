import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/presentation/login.page.component').then(m => m.LoginPageComponent)
  },
  {
    path: 'users',
    loadComponent: () => import('./features/users/presentation/user.page.component').then(m => m.UserPageComponent)
  }
];
