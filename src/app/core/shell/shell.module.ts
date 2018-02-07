import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedModule } from '../../shared/myshared.module';
import { SHELL_ROUTES } from './shell.routes';
import { ServiceModule } from '../../services/service.module';



@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    ServiceModule,
    SHELL_ROUTES
  ],
  declarations: []
})
export class ShellModule {}
