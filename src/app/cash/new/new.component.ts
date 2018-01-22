import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Operation } from '../models/operation.class';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public operationForm: FormGroup;
  public operation: Operation;
  currentDate = new Date(Date.now());

  constructor(private formBuilder: FormBuilder) {}

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
        [],
        [
          Validators.required,
          this.mustBePositiveValue
        ]
      ],
      operationType: [
        [],
        [
          Validators.required
        ]
      ]
    });
  }

  createNewOperation() {
    this.operation = new Operation(this.currentDate, 0, 1);
  }

  onSubmit() {
    this.operation = this.operationForm.value;
  }

  mustBeDateRange(date1: Date, date2: Date) {}

  mustBePositiveValue(control: AbstractControl) {
    const isInvalid = control.value !== undefined && (isNaN(control.value) || control.value < 0);
    if (isInvalid) {
      return {'mustbepositive' : true};
    } else {
      return null;
    }
  }
}
