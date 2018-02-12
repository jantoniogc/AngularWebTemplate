import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { userReducer } from './user/user.reducer';
import { filterReducer } from './filter/filter.reducer';
import { profileReducer } from './usuario/usuario.reducer';
import { usuariosReducer } from './Usuarios/usuarios.reducer';
import { selectedUsuarioReducer } from './Usuarios/selected/selected.reducer';



export const AppReducer: ActionReducerMap<AppState> = {
  user: userReducer,
  filter: filterReducer,
  usuario: profileReducer,
  usuarios: usuariosReducer,
  selected: selectedUsuarioReducer
};
