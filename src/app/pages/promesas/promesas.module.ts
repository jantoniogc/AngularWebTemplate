import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromesasComponent } from './promesas.component';
import { MySharedModule } from '../../shared/myshared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PromesasComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PromesasComponent]
})
export class PromesasModule { }
