import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  email: FormControl;
  asunto: FormControl;

  constructor(
    public dialog: MatDialog
  ) {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.asunto = new FormControl('', [Validators.required]);
  }

  getErrorEmailMessage() {
    return this.email.hasError('required') ? 'Debería indicar un email'
      : this.email.hasError('email') ? 'El Email indicado no es correcto' : '';
  }

  ngOnInit() {}

  send() {
    if (this.email.valid && this.asunto.valid) {
      consola.log('correo enviado');
    }
  }
}
