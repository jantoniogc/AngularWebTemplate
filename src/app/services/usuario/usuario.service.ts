import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import swal from 'sweetalert'
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';


@Injectable()
export class UsuarioService {

  public usuario: Usuario;
  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _subirArchivoService: SubirArchivoService

  ) {
    this.cargarStorage();

  }

  estaLogueado() {
    this.cargarStorage();
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }

  login(usuario: Usuario, recordar: Boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS + '/login'
    return this.http.post(url, usuario)
      .map((resp: any) => {
        this.guardarStorage(resp.id, resp.tocken, resp.usuario);
        return true;
      });
  }

  //LOGOUT
  logout() {
    this.usuario = null;
    this.router.navigate(['/login']);
  }

  // login Google
  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google'
    return this.http.post(url, { token: token });

  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)
      .map((resp: any) => {
        swal('Usuario creado', usuario.email, 'success');
        return resp.usuario;
      });
  }

  actualizarUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario/' + usuario._id + '?tocken=' + this.token;
    return this.http.put(url, usuario);
  }

  cambiarImagen(archivo: File, id: string) {
    return this._subirArchivoService.subirArchivo(archivo, 'usuarios', id);
  }

}
