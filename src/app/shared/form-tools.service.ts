import { Injectable, Inject } from '@angular/core';
import { FormGroup, AbstractControl} from '@angular/forms';

@Injectable()
export class FormToolsService {
  private formGroup: FormGroup;

  constructor() {}

  public formGroupValue(form: FormGroup) {
    this.formGroup = form;
  }

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
    return control.touched || control.dirty;
  }
}
