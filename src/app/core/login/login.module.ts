import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { MySharedModule } from '../../shared/myshared.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from '../../services/service.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
