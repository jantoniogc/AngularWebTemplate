import { MySharedModule } from './../shared/myshared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsModule } from './account-settings/account-settings.module';

@NgModule({
  imports: [
    CommonModule,
    AccountSettingsModule,
    MySharedModule
  ],
  declarations: []
})
export class PagesModule {}
