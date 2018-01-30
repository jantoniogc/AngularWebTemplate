import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MySharedModule } from '../../shared/myshared.module';
import { TranslateModule } from 'ng2-translate';


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
@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ShellModule {}
