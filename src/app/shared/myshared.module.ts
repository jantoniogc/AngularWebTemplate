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
import { TranslateModule } from 'ng2-translate';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';

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
    TranslateModule,
    DialogModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
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
    ControlErrorsComponent,
    InputComponent,
    TextareaComponent,
    TranslateModule,
    DialogModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [InputComponent, ControlErrorsComponent, TextareaComponent]
})
export class MySharedModule {}
