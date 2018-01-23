import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlErrorsComponent } from './control-errors.component';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { FormBuilder } from '@angular/forms';


describe('ControlErrorsComponent', () => {
  let component: ControlErrorsComponent;
  let fixture: ComponentFixture<ControlErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, MatInputModule],
      declarations: [ControlErrorsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlErrorsComponent);
    component = fixture.componentInstance;
    component.field = 'test';
    component.form = new FormBuilder().group({ test: '' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
