import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/services.index';
import { Usuario } from '../../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../redux/app.state';
import { LogoutUsuarioAction } from '../../../../redux/usuario/usuario.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[UsuarioService]
})
export class HeaderComponent implements OnInit {

  public usuario: Usuario;

  constructor(
    private store: Store<AppState>,
    private _usuarioService: UsuarioService,
  ) {
    this.store.select('usuario')
      .subscribe((usuario) => {
        this.usuario = usuario;
      });
  }

  ngOnInit() { }

  logout() {
    const action = new LogoutUsuarioAction();
    this.store.dispatch(action);
  }
}
