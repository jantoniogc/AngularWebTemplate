import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../services.index';
import { AppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class VerificaTokenGuard implements CanActivate {

  constructor(
    private _usuarioService: UsuarioService,
  ) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('varifica-tocken-guards');
    let tocken = this._usuarioService.token;
    let payload = JSON.parse(atob(tocken.split('.')[1]));
    let expirado = this.expired(payload.exp);
    if (expirado) {
      return false;
    }
    return this.verificaRenueva(payload.exp);
  }

  verificaRenueva(fechaExp: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let tockenExp = new Date(fechaExp * 1000);
      let ahora = new Date();
      console.log(ahora.getTime());
      console.log(4 * 60 * 60 * 1000);
      ahora.setTime(ahora.getTime() + (1 * 60 * 60 * 1000));

      console.log(tockenExp);
      console.log(ahora);
      if (tockenExp.getTime() > ahora.getTime()) {
        resolve(true);
      } else {
        this._usuarioService.renuevaTocken().subscribe(resp => {
          resolve(true);
        }, () => {
          reject(false);
        });
      }
      resolve(true);
    });
  }

  expired(fechaExp: number) {
    let ahora = new Date().getTime() / 1000;
    if (fechaExp < ahora) {
      return true;
    } else {
      return false;
    }

  }
}
