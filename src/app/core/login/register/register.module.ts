import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { MySharedModule } from '../../../shared/myshared.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule {}
