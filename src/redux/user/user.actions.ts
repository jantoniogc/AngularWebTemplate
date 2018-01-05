import { Action } from '@ngrx/store';
import { User } from './user.model';

export const USER_ADD = '[User] add';
export const USER_REMOVE = '[User] remove';
export const USER_TOGGLE = '[User] toggle';
export const USER_UPDATE = '[User] update';

export class UserAddAction implements Action {
  readonly type = USER_ADD;

  constructor(
    public newUser: User
  ) { }
}

export class UserRemoveAction implements Action {
  readonly type = USER_REMOVE;

  constructor(
    public id: string
  ) { }
}

export class UserToggleAction implements Action {
  readonly type = USER_TOGGLE;

  constructor(
    public id: string
  ) { }
}

export class UserUpdateAction implements Action {
  readonly type = USER_UPDATE;

  constructor(
    public id: string,
    public newNombre: string
  ) { }
}

export type AllActions = UserAddAction | UserRemoveAction | UserToggleAction | UserUpdateAction;
