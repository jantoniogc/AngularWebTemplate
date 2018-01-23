import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorsComponent } from '../control-errors/control-errors.component';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatInputModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [InputComponent, ControlErrorsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.field = 'test';
    component.label = 'Test Field';
    component.form = new FormBuilder().group({
      test: ''
    });
    component.type = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
