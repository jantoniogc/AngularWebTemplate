import { Usuario } from "../../app/models/usuario.model";
import { Action } from "@ngrx/store";
import { Usuarios } from "./usuarios.model";

export const REQUEST_USUARIOS = '[USUARIOS] REQUEST_USUARIOS';
export const REQUEST_USUARIOS_BY_QUERY = '[USUARIOS] REQUEST_USUARIOS_BY_QUERY';
export const ADD_USUARIO = '[USUARIOS] ADD_USUARIO';

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

export class AddUsuarioAction implements Action {
  readonly type = ADD_USUARIO;

  constructor(
    public usuarios: Usuarios
  ) { }
}

export type AllActions = RequestUsuariosAction | AddUsuarioAction | RequestUsuariosByQueryAction;
