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
import { InputComponent } from './input/input.component';
import { ControlErrorsComponent } from './control-errors/control-errors.component';
import { TextareaComponent } from './textarea/textarea.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    BrowserAnimationsModule,
    ControlErrorsComponent,
    InputComponent,
    TextareaComponent
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [InputComponent, ControlErrorsComponent, TextareaComponent]
})
export class SharedModule {}
