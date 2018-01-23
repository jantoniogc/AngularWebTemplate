import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Operation } from '../models/operation.class';
import { FormToolsService } from '../../shared/form-tools.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [
    FormToolsService
  ]
})
export class NewComponent implements OnInit {
  public operationForm: FormGroup;
  public operation: Operation;

  private currentDate = new Date(Date.now());

  constructor(
    private formBuilder: FormBuilder,
    private formTools: FormToolsService
  ) {}

  ngOnInit() {
    this.createNewOperation();
    this.buildForm();
  }

  buildForm() {
    this.operationForm = this.formBuilder.group({
      date: [
        this.operation.date.toISOString().substring(0, 10),
        [Validators.required]
      ],
      amount: [
        [this.operation.amount],
        [Validators.required, this.mustBePositiveValue]
      ],
      operationType: [[this.operation.operationType], [Validators.required]],
      description: [[this.operation.description], [Validators.required]]
    });
    this.formTools.formGroupValue(this.operationForm);
  }

  createNewOperation() {
    this.operation = new Operation(this.currentDate, 0, 0, '');
  }

  onSubmit() {
    this.operation = this.operationForm.value;
  }

  mustBeDateRange(date1: Date, date2: Date) {}

  mustBePositiveValue(control: AbstractControl) {
    const isInvalid =
      control.value !== undefined &&
      (isNaN(control.value) || control.value < 0);
    if (isInvalid) {
      return { mustBePositiveNUmber: true };
    } else {
      return null;
    }
  }
}
