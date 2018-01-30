import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Graficas1Component } from './graficas1.component';
import { ChartsModule } from 'ng2-charts';
import { MySharedModule } from '../shared/myshared.module';

const routes: Routes = [
  {
    path: '',
    component: Graficas1Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Graficas1Component]
})
export class Graficas1Module { }
