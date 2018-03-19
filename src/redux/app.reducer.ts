import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { userReducer } from './user/user.reducer';
import { filterReducer } from './filter/filter.reducer';
import { profileReducer } from './usuario/usuario.reducer';
import { usuariosReducer } from './Usuarios/usuarios.reducer';
import { selectedUsuarioReducer } from './Usuarios/selected/selected.reducer';
import { ModalReducer } from './ModalUpload/modal.reducer';
import { selectedBusquedaReducer } from './busquedaSelect/busqueda.reducer';



export const AppReducer: ActionReducerMap<AppState> = {
  user: userReducer,
  filter: filterReducer,
  usuario: profileReducer,
  usuarios: usuariosReducer,
  selected: selectedUsuarioReducer,
  modalUpload: ModalReducer,
  selectBusqueda: selectedBusquedaReducer
};
