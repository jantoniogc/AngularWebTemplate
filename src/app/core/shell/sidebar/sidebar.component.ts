import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/services.index';
import { UsuarioService } from '../../../services/services.index';
import { Usuario } from '../../../models/usuario.model';
import { AppState } from '../../../../redux/app.state';
import { Store } from '@ngrx/store';
import { LogoutUsuarioAction } from '../../../../redux/usuario/usuario.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SidebarService, UsuarioService]
})
export class SidebarComponent implements OnInit {

  public usuario: Usuario;

  constructor(
    public _sidebarService: SidebarService,
    private _usuarioService: UsuarioService,
    private _store: Store<AppState>
  ) {
    this._store.select('usuario')
      .subscribe(usuario => {
        this.usuario = usuario;
      });
  }


  ngOnInit() { }

  logout(){
    const action = new LogoutUsuarioAction();
    this._store.dispatch(action);
  }

}
