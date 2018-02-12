import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalesComponent } from './hospitales.component';
import { MySharedModule } from '../../shared/myshared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HospitalesComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HospitalesComponent]
})
export class HospitalesModule { }
