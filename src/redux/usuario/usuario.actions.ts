import { Action } from '@ngrx/store';
import { Usuario } from '../../app/models/usuario.model';


export const REQUEST_UPDATE_USUARIO = '[USUARIO] REQUEST_UPDATE_USUARIO';
export const REQUEST_LOGIN_GOOGLE_USUARIO = '[USUARIO] REQUEST_LOGIN_GOOGLE_USUARIO';
export const REQUEST_LOGIN_USUARIO = '[USUARIO] REQUEST_LOGIN_USUARIO'
export const UPDATE_USUARIO = '[USUARIO] UPDATE_USUARIO';
export const LOGOUT_USUARIO = '[USUARIO] LOGOUT_USUARIO';
export const AUTHENTICATE_ERROR = '[Usuario] Error Autenticación'


export class RequestUpdateUserAction implements Action {
  readonly type = REQUEST_UPDATE_USUARIO;

  constructor(
    public usuario: Usuario
  ) { }
}

export class RequestLoginGoogleUserAction implements Action {
  readonly type = REQUEST_LOGIN_GOOGLE_USUARIO;

  constructor(
    public token: string
  ) { }
}

export class RequestLoginUserAction implements Action {
  readonly type = REQUEST_LOGIN_USUARIO;

  constructor(
    public usuario: Usuario,
    public recordar: boolean
  ) { }
}

export class UpdateUsuarioAction implements Action {
  readonly type = UPDATE_USUARIO;

  constructor(
    public usuario: Usuario
  ) { }
}

export class LogoutUsuarioAction implements Action {
  readonly type = LOGOUT_USUARIO;

  constructor() { }
}

/**
 * Autenticacion error.
 * @class AuthenticationErrorAction
 * @implements {Action}
 */
export class AuthenticationErrorAction implements Action {
  readonly type = AUTHENTICATE_ERROR;

  constructor(public payload?: any) { }
}
export type AllActions = UpdateUsuarioAction
  | RequestUpdateUserAction
  | LogoutUsuarioAction
  | RequestLoginUserAction
  | AuthenticationErrorAction;
