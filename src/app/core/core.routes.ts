import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './shell/pages/pages.component';
import { ShellComponent } from './shell/shell.component';
import { LoginGuardGuard } from '../services/services.index';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [LoginGuardGuard],
    loadChildren: './shell/shell.module#ShellModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './login/register/register.module#RegisterModule'
  },
  {
    path: '**',
    loadChildren: './nopagefound/nopagefound.module#NopagefoundModule'
  }
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true });
