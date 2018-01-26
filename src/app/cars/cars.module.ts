import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { MySharedModule } from '../shared/myshared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarsComponent]
})
export class CarsModule {}
