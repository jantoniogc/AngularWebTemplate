import { DaskboardComponent } from './daskboard/daskboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { MySharedModule } from '../shared/myshared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TranslateLoader,
  TranslateStaticLoader,
  TranslateModule
} from 'ng2-translate';
import { Http } from '@angular/http';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shell/breadcrumbs/breadcrumbs.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: '../about/about.module#AboutModule'
  },
  {
    path: 'users',
    loadChildren: '../users/users.module#UsersModule'
  },
  {
    path: 'cash',
    loadChildren: '../cash/cash.module#CashModule'
  },
  {
    path: 'cars',
    loadChildren: '../cars/cars.module#CarsModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: tralationFactory,
      deps: [Http]
    })
  ],
  declarations: [
    ShellComponent,
    MainContentComponent,
    TopBarComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    Graficas1Component,
    DaskboardComponent
  ],
  exports: [ShellComponent]
})
export class CoreModule {}

export function tralationFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}
