import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]
;
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
