import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../redux/app.state';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { LogoutUsuarioAction } from '../../../redux/usuario/usuario.actions';

@Injectable()
export class AdminGuard implements CanActivate {

  public usuario: Usuario;

  constructor(
    private store: Store<AppState>,
    private _router: Router
  ) {
    this.store.select('usuario').subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.usuario.role === 'ADMIN_ROLE') {
      return true;
    }
    else {
      console.log('Bloqueado por ADMIN GUARDS');
      this.store.dispatch(new LogoutUsuarioAction());
      return false;
    }
  }
}
