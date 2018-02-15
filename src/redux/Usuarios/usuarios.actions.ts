import { Usuario } from "../../app/models/usuario.model";
import { Action } from "@ngrx/store";
import { Usuarios } from "./usuarios.model";

export const REQUEST_USUARIOS = '[USUARIOS] REQUEST_USUARIOS';
export const REQUEST_USUARIOS_BY_QUERY = '[USUARIOS] REQUEST_USUARIOS_BY_QUERY';
export const REQUEST_DELETE_USUARIOS = '[USUARIOS] REQUEST_DELETE_USUARIOS';
export const REQUEST_UPDATE_USUARIOS = '[USUARIOS] REQUEST_UPDATE_USUARIOS';
export const ADD_USUARIO = '[USUARIOS] ADD_USUARIO';
export const UPDATE_USUARIO = '[USUARIOS] UPDATE_USUARIO';
export const DELETE_USUARIO = '[USUARIOS] DELETE_USUARIO';

export class RequestUsuariosAction implements Action {
  readonly type = REQUEST_USUARIOS;

  constructor(
    public desde: number
  ) { }
}

export class RequestUsuariosByQueryAction implements Action {
  readonly type = REQUEST_USUARIOS_BY_QUERY;

  constructor(
    public query: string,
    public desde: number
  ) { }
}

export class RequestDeleteUsuarioAction implements Action {
  readonly type = REQUEST_DELETE_USUARIOS;

  constructor(
    public id: string,
  ) { }
}

export class RequestUpdateUsuarioAction implements Action {
  readonly type = REQUEST_UPDATE_USUARIOS;

  constructor(
    public usuario: Usuario,
  ) { }
}

export class AddUsuarioAction implements Action {
  readonly type = ADD_USUARIO;

  constructor(
    public usuarios: Usuarios
  ) { }
}

export class DeleteUsuarioAction implements Action {
  readonly type = DELETE_USUARIO;

  constructor(
    public id: string
  ) { }
}

export class UpdateUsuarioAction implements Action {
  readonly type = UPDATE_USUARIO;

  constructor(
    public usuario: Usuario
  ) { }
}

export class EffectError implements Action {
  readonly type = '[Error] Effect Error';
}


export type AllActions = RequestUsuariosAction | AddUsuarioAction | RequestUsuariosByQueryAction |
  DeleteUsuarioAction | UpdateUsuarioAction | EffectError;
