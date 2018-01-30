import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MySharedModule } from '../shared/myshared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shell/breadcrumbs/breadcrumbs.component';
import { APP_ROUTES } from './core.routes';
import { PagesComponent } from './shell/pages/pages.component';
import { LoginComponent } from './login/login.component';

import {
  TranslateLoader,
  TranslateStaticLoader,
  TranslateModule
} from 'ng2-translate';
import { Http } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
@NgModule({
  declarations: [
    ShellComponent,
    MainContentComponent,
    TopBarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    MySharedModule,
    APP_ROUTES,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: tralationFactory,
      deps: [Http]
    })
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent
  ]
})
export class CoreModule {}
export function tralationFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}



