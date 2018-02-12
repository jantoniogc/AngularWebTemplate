import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';



import { mergeMap, map } from 'rxjs/operators';
import { RequestUpdateUserAction, REQUEST_UPDATE_USUARIO, UpdateUsuarioAction, REQUEST_LOGIN_GOOGLE_USUARIO, RequestLoginGoogleUserAction } from './usuario.actions';
import { UsuarioService } from '../../app/services/usuario/usuario.service';
import { Router } from '@angular/router';



@Injectable()
export class ProfileEffects {


  @Effect() requestPosts$: Observable<Action> = this.actions$.ofType(REQUEST_UPDATE_USUARIO)
    .pipe(
    mergeMap((action: RequestUpdateUserAction) => {
      return this.usuarioService.actualizarUsuario(action.usuario)
        .map((response: any) => {
          return new UpdateUsuarioAction(response.usuario);
        });

    })
    );

  @Effect() loginGooglePosts$: Observable<Action> = this.actions$.ofType(REQUEST_LOGIN_GOOGLE_USUARIO)
    .pipe(
    mergeMap((action: RequestLoginGoogleUserAction) => {
      return this.usuarioService.loginGoogle(action.token)
        .map((response: any) => {
          console.log('redireccionamos');
          window.location.href = '#/dashboard';
          this.usuarioService.guardarStorage(response.usuario._id, response.tocken, response.usuario);
          return new UpdateUsuarioAction(response.usuario);
        });

    })
    );


  constructor(
    private usuarioService: UsuarioService,
    private actions$: Actions,
    private _router: Router
  ) { }


}
