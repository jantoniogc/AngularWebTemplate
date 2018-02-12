import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { SelectedUsuariosAction, SelectedByQueryAction } from '../../../redux/Usuarios/selected/selected.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuario[];
  public desde: number = 0;
  public totalRegistros: number = 0;
  public cargando: boolean = false;
  public query: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    const action = new SelectedUsuariosAction({
      desde: 0,
      busqueda: ''
    });
    this.store.dispatch(action);
    this.store.select('usuarios')
      .subscribe((usuarios) => {
        this.usuarios = usuarios.usuarios;
        this.totalRegistros = usuarios.totalUsuarios;
        this.cargando = false;
      });

    this.query = new FormControl('');

    // Esperamos cambios en el input
    this.query.valueChanges
      .subscribe((value: string) => {
        this.desde = 0;
        if (value.length <= 0) {
          const action = new SelectedUsuariosAction({
            desde: this.desde,
            busqueda: ''
          });
          this.store.dispatch(action);
        } else {
          const action = new SelectedByQueryAction({
            desde: this.desde,
            busqueda: value
          });
          this.store.dispatch(action);
        }
      });
  }

  ngOnInit() {
  }


  cambiarDesde(valor: number) {
    this.cargando = true;
    let desde = this.desde + valor;
    if (desde >= this.totalRegistros) {
      swal('No hay más registros', '', 'warning');
      this.cargando = false;
      return;
    }
    if (desde < 0) {
      swal('No hay más registros', '', 'warning');
      this.cargando = false;
      return;
    }
    if (this.query.value === '') {
      this.desde += valor;
      const action = new SelectedUsuariosAction({
        desde: this.desde,
        busqueda: ''
      });
      this.store.dispatch(action);
    } else {
      this.desde += valor;
        const action = new SelectedByQueryAction({
        desde: this.desde,
        busqueda: this.query.value
      });
      this.store.dispatch(action);
    }
  }
}
