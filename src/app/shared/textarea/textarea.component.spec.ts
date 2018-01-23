import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaComponent } from './textarea.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorsComponent } from '../control-errors/control-errors.component';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          MatInputModule,
          ReactiveFormsModule,
          BrowserAnimationsModule
        ],
        declarations: [TextareaComponent, ControlErrorsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    component.field = 'test';
    component.label = 'Test Field';
    component.form = new FormBuilder().group({ test: '' });
    component.type = '';
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
