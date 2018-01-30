import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';
import { MySharedModule } from '../../shared/myshared.module';

const routes: Routes = [
  {
    path: '',
    component: ProgressComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgressComponent]
})
export class ProgressModule {}
