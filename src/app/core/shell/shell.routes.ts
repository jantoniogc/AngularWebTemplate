import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'progress',
    loadChildren: '../progress/progress.module#ProgressModule'
  },
  {
    path: 'graficas1',
    loadChildren: '../../graficas1/graficas1.module#Graficas1Module'
  },
  {
    path: 'account-settings',
    loadChildren: '../../pages/account-settings/account-settings.module#AccountSettingsModule'
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: '../../about/about.module#AboutModule'
  },
  {
    path: 'users',
    loadChildren: '../../users/users.module#UsersModule'
  },
  {
    path: 'cash',
    loadChildren: '../../cash/cash.module#CashModule'
  },
  {
    path: 'cars',
    loadChildren: '../../cars/cars.module#CarsModule'
  }
];

export const SHELL_ROUTES = RouterModule.forChild(routes);
