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
  declarations: [ShellComponent, MainContentComponent, TopBarComponent, FooterComponent],
  exports: [ShellComponent]
})
export class CoreModule {}

export function tralationFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}
