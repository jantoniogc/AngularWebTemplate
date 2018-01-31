import { AccountSettingsComponent } from './account-settings.component';
import { MySharedModule } from './../../shared/myshared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AccountSettingsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountSettingsComponent]
})
export class AccountSettingsModule { }
