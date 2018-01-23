import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable()
export class FormToolsService {
  constructor(public formGroup: FormGroup) {}

  hasErrorToShow(field) {
    const control: AbstractControl = this.getControl(field);
    return control && control.invalid && this.shouldBeValidate(control);
  }

  getErrors(field) {
    const control = this.getControl(field);
    return control && control.errors;
  }
  private getControl(field): AbstractControl {
    return this.formGroup && this.formGroup.get(field);
  }

  private shouldBeValidate(control: AbstractControl) {
    return (control.touched || control.dirty);
  }
}
