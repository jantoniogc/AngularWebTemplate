import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { SelectedUsuariosAction, SELECT_USUARIOS, SELECT_USUARIOS_BY_BUSQUEDA, SelectedByQueryAction } from './selected.actions';

import { mergeMap, map } from 'rxjs/operators';
import { RequestUsuariosAction, RequestUsuariosByQueryAction } from '../usuarios.actions';

@Injectable()
export class SelectedEffects {
  // para producir un efecto secundario necesitamos el decorador @Effect
  // creamos un Observable de tipo Action, un efecto secundario siempre debe retornar una acción
  // debe de estar pendiente de que se ejecute de la acción del tipo SELECT_USUARIOS
  // esto retornará una nueva acción.
  @Effect() requestPosts$: Observable<Action> = this.actions$.ofType(SELECT_USUARIOS)
  .pipe(
    map((action: SelectedUsuariosAction) => {
      return new RequestUsuariosAction(action.selected.desde);
    })
  );


  @Effect() requestUsuariosByBusqueda$: Observable<Action> = this.actions$.ofType(SELECT_USUARIOS_BY_BUSQUEDA)
    .pipe(
    map((action: SelectedByQueryAction) => {
      return new RequestUsuariosByQueryAction(action.selected.busqueda, action.selected.desde);
    })
    );
  constructor(
    private actions$: Actions
  ) {}
}
