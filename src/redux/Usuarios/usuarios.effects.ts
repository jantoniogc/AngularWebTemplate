import { REQUEST_USUARIOS, RequestUsuariosAction, AddUsuarioAction, REQUEST_USUARIOS_BY_QUERY, RequestUsuariosByQueryAction } from "./usuarios.actions";
import { UsuarioService } from "../../app/services/usuario/usuario.service";
import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class UsuariosEffects {

  @Effect() requestUsuarios$: Observable<Action> = this.actions$.ofType(REQUEST_USUARIOS)
    .pipe(
    mergeMap((action: RequestUsuariosAction) => {
      return this.usuariosService.cargarUsuarios(action.desde)
        .pipe(
        map((response: any) => {
          return new AddUsuarioAction(response);
        })
        );
    })
    );


  @Effect() requestByQueryUsuarios$: Observable<Action> = this.actions$.ofType(REQUEST_USUARIOS_BY_QUERY)
    .pipe(
    mergeMap((action: RequestUsuariosByQueryAction) => {
      return this.usuariosService.busqueda(action.query, action.desde)
        .pipe(
        map((response: any) => {
          return new AddUsuarioAction(response);
        })
        );
    })
    );


  constructor(
    private usuariosService: UsuarioService,
    private actions$: Actions
  ) { }
}
