import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { usuariosReducer } from './user/user.reducer';
import { filterReducer } from './filter/filter.reducer';



export const AppReducer: ActionReducerMap<AppState> = {
  usuarios: usuariosReducer,
  filter: filterReducer
};
