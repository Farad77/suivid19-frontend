import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './_services/auth.guard';
import { PageGuard } from './_services/page.guard';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [PageGuard],
    canLoad: [PageGuard], 
  }, {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [PageGuard],
    canLoad: [PageGuard],
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
