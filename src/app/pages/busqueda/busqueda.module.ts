import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda.component';
import { Routes, RouterModule } from '@angular/router';
import { MySharedModule } from '../../shared/myshared.module';

const routes: Routes = [
  {
    path: '',
    component: BusquedaComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusquedaComponent]
})
export class BusquedaModule { }
