import { MySharedModule } from './../shared/myshared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsModule } from './account-settings/account-settings.module';
import { PromesasModule } from './promesas/promesas.module';
import { RxjsModule } from './rxjs/rxjs.module';

@NgModule({
  imports: [
    CommonModule,
    AccountSettingsModule,
    MySharedModule,
    PromesasModule,
    RxjsModule
  ],
})
export class PagesModule {}
