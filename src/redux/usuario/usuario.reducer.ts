import { Action } from '@ngrx/store';
import { AllActions, UPDATE_USUARIO, LOGOUT_USUARIO, AUTHENTICATE_ERROR } from './usuario.actions';
import { Usuario } from '../../app/models/usuario.model';



const INITIAL_STATE: Usuario = {
  nombre: '',
  email: '',
  img: null,
  _id: null,
  google: false,
  password: '',
  role: ''
};

export function profileReducer(oldUsuario = INITIAL_STATE, action: AllActions): Usuario {
  if (action === null) {
    return oldUsuario;
  }
  switch (action.type) {
    case UPDATE_USUARIO:
      return action.usuario;
    case LOGOUT_USUARIO:
      return INITIAL_STATE;
    case AUTHENTICATE_ERROR:
      return INITIAL_STATE
    default:
      return oldUsuario;
  }
}
