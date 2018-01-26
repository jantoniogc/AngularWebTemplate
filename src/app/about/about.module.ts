import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { EmailComponent } from './email/email.component';
import { SocialComponent } from './social/social.component';
import { MySharedModule } from '../shared/myshared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MySharedModule
  ],
  declarations: [
    AboutComponent,
    EmailComponent,
    SocialComponent
  ],
})
export class AboutModule {}
