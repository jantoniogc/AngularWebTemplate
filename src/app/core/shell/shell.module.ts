import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedModule } from '../../shared/myshared.module';
import { SHELL_ROUTES } from './shell.routes';



@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    SHELL_ROUTES
  ],
  declarations: []
})
export class ShellModule {}
