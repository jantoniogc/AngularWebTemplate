import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)],
  declarations: [
    UserComponent,
    NewUserComponent,
    ListUserComponent,
    UsersComponent
  ],
})
export class UsersModule {}
