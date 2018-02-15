import { REQUEST_USUARIOS, RequestUsuariosAction, AddUsuarioAction, REQUEST_USUARIOS_BY_QUERY, RequestUsuariosByQueryAction, DeleteUsuarioAction, DELETE_USUARIO, RequestDeleteUsuarioAction, REQUEST_DELETE_USUARIOS, EffectError, REQUEST_UPDATE_USUARIOS, RequestUpdateUsuarioAction, UpdateUsuarioAction } from "./usuarios.actions";
import { UsuarioService } from "../../app/services/usuario/usuario.service";
import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { mergeMap, map } from "rxjs/operators";
import { catchError } from "rxjs/operators/catchError";
import { of } from "rxjs/observable/of";



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

  @Effect() removeUsuarios$: Observable<Action> = this.actions$.ofType(REQUEST_DELETE_USUARIOS)
    .pipe(
    mergeMap((action: RequestDeleteUsuarioAction) => {
      return this.usuariosService.borrarUsuario(action.id)
        .pipe(
        map((response: any) => {
          swal('Usuario borrado', 'El usuario ha sido eliminado correctamente', 'success');
          return new DeleteUsuarioAction(response.usuarios._id);
        })
        );
    })
    );

  @Effect() updateUsuarios$: Observable<Action> = this.actions$.ofType(REQUEST_UPDATE_USUARIOS)
    .pipe(
    mergeMap((action: RequestUpdateUsuarioAction) => {
      return this.usuariosService.actualizarUsuario(action.usuario)
        .pipe(
        map((response: any) => {
          swal('Usuario Actualizado', 'El usuario ha sido actualizado correctamente', 'success');
          return new UpdateUsuarioAction(response.usuario);
        })
        );
    })
    );


  constructor(
    private usuariosService: UsuarioService,
    private actions$: Actions
  ) { }
}
