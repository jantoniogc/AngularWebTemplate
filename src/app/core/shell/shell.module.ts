import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySharedModule } from '../../shared/myshared.module';
import { SHELL_ROUTES } from './shell.routes';
import { ServiceModule } from '../../services/service.module';
import { AppReducer } from '../../../redux/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from '../../../redux/usuario/usuario.effects';



@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    ServiceModule,
    SHELL_ROUTES,
    // StoreModule.forRoot(AppReducer),
    // EffectsModule.forRoot([
    //   ProfileEffects
    // ])
  ],
  declarations: []
})
export class ShellModule {}
