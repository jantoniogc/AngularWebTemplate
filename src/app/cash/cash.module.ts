import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { FormToolsService } from '../shared/form-tools.service';

const routes: Routes = [
  {
    path: '',
    component: NewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewComponent]
})
export class CashModule {}
