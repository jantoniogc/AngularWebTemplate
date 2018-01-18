import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatChipsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
