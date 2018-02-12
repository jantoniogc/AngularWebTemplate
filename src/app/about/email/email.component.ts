import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Message } from '../models/message.class';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  public messageForm: FormGroup;
  public message: Message;


  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
     this.messageForm = this.formBuilder.group({
      sender: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      body: ['']
    });
  }

  onSubmit() {
  }

  showError(fieldName: string) {
    const control = this.messageForm.get(fieldName);
    return (control.touched || control.dirty) && !control.valid;
  }
}
