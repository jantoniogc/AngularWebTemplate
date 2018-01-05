import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../redux/app.state';
import { ErrorStateMatcher } from '@angular/material/core';
import { UserAddAction } from '../../redux/user/user.actions';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  textField: FormControl;
  constructor(private store: Store<AppState>) {
    this.textField = new FormControl('', [Validators.required]);
  }

  ngOnInit() {}

  save() {
    if (this.textField.valid) {
      const action = new UserAddAction({
        id: Math.random().toString(),
        nombre: this.textField.value,
        activo: true,
        fechaAlta: new Date()
      });
      this.store.dispatch(action);
      this.textField.reset();
    }
  }
}
