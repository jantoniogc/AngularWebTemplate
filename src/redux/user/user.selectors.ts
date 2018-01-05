import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from './user.model';


export const selectUsuarios = (state: AppState) => state.usuarios;
export const selectFilter = (state: AppState) => state.filter;

export const getVisibleUsuarios = createSelector (
  selectUsuarios,
  selectFilter,
  (usuarios: User[], filter: string) => {
    if (filter === 'SHOW_ACTIVE') {
      return usuarios.filter(user => user.activo);
    }
    if (filter === 'SHOW_NOACTIVE') {
      return usuarios.filter(user => !user.activo);
    }
    return usuarios;
  }
);
