import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule'
  },
  {
    path: 'users',
    loadChildren: '../users/users.module#UsersModule'
  },
  {
    path: 'cash',
    loadChildren: '../cash/cash.module#CashModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ShellComponent, MainContentComponent, TopBarComponent],
  exports: [ShellComponent]
})
export class CoreModule {}
