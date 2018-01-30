import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound.component';

const routes: Routes = [
  {
    path: '',
    component: NopagefoundComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NopagefoundComponent]
})
export class NopagefoundModule { }
