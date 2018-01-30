import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Graficas1Component } from './graficas1.component';

const routes: Routes = [
  {
    path: '',
    component: Graficas1Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Graficas1Component]
})
export class Graficas1Module { }
