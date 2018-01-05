import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../redux/user/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { FormControl, Validators } from '@angular/forms';
import { UserToggleAction, UserRemoveAction, UserUpdateAction } from '../../redux/user/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  checkField: FormControl;
  textField: FormControl;
  editing: boolean;

  constructor(private store: Store<AppState>) {
    this.checkField = new FormControl(true);
    this.checkField.valueChanges.subscribe(value => {
      const action = new UserToggleAction(this.user.id);
      this.store.dispatch(action);
    });
    this.textField = new FormControl('', [Validators.required]);
  }
  ngOnInit() {}

  deleteUser() {
    const action = new UserRemoveAction(this.user.id);
    this.store.dispatch(action);
  }
  updateText() {
    const action = new UserUpdateAction(this.user.id, this.textField.value);
    this.store.dispatch(action);
  }
}
