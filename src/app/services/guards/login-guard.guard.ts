import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  private usuario: Usuario;

  constructor(
    @Inject(UsuarioService) private usuarioService: UsuarioService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.select('usuario')
      .subscribe(usuario => {
        this.usuario = usuario;
        this.canActivate();
        this.usuarioService.usuario = this.usuario;
      });
   }

  canActivate(): boolean {
    if (this.usuario.email !== '') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
