import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { getVisibleUsuarios } from '../../../redux/user/user.selectors';
import { User } from '../../../redux/user/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  usuarios: User[];

  constructor(private store: Store<AppState>) {
    this.readTodosState();
  }

  ngOnInit() {}

  private readTodosState() {
    this.store.select(getVisibleUsuarios).subscribe(usuarios => {
      this.usuarios = usuarios;
    });
  }
}
