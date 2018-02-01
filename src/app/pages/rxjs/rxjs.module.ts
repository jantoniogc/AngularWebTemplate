import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { MySharedModule } from '../../shared/myshared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: RxjsComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    MySharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RxjsComponent]
})
export class RxjsModule { }
