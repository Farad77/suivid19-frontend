import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './_services/auth.guard';
import { PageGuard } from './_services/page.guard';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
   /*  canActivate: [PageGuard],
    canLoad: [PageGuard], */
  }, {
    path: '',
    component: AdminLayoutComponent,
   /*  canActivate: [PageGuard],
    canLoad: [PageGuard], */
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'login'
  }
]
