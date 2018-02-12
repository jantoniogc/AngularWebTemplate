import { Action } from '@ngrx/store';
import { Selected } from './selected.model';

export const SELECT_USUARIOS = 'SELECT_USUARIOS';
export const SELECT_USUARIOS_BY_BUSQUEDA = 'SELECT_USUARIOS_BY_BUSQUEDA';

export class SelectedUsuariosAction implements Action {
  readonly type = SELECT_USUARIOS;

  constructor(
    public selected: Selected
  ) {}
}

export class SelectedByQueryAction implements Action {
  readonly type = SELECT_USUARIOS_BY_BUSQUEDA;

  constructor(
    public selected: Selected
  ) { }
}

export type AllActions = SelectedUsuariosAction | SelectedByQueryAction;
