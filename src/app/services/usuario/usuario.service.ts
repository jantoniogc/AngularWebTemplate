import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import swal from 'sweetalert'
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuarioService {

  public usuario: Usuario;
  public token: string;
  public menu: any = [];

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
      this.menu = JSON.parse(localStorage.getItem('menu'))
    } else {
      this.token = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario, menu: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('menu', JSON.stringify(menu));
    this.usuario = usuario;
    this.token = token;
    this.menu = menu;
  }

  login(usuario: Usuario, recordar: Boolean = false) {
    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }
    let url = URL_SERVICIOS + '/login'
    return this.http.post(url, usuario);
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
      })
      .catch((err: any) => {
        swal(err.error.mensaje, err.error.errors.message,'error');
        return Observable.throw(err);
      });
  }

  actualizarUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario/' + usuario._id + '?tocken=' + this.token;
    return this.http.put(url, usuario)
      .map((resp: any) => {
        if (usuario._id === this.usuario._id) {
          this.guardarStorage(resp.usuario._id, this.token, resp.usuario, this.menu);
        }
        return resp;
      })
  }

  cambiarImagen(archivo: File, id: string) {
    return this._subirArchivoService.subirArchivo(archivo, 'usuarios', id);
  }

  cargarUsuarios(desde: number = 0) {
    let url = URL_SERVICIOS + '/usuario' + '?desde=' + desde;
    return this.http.get(url);
  }

  busqueda(termino: string, desde: number = 0) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino + '?desde=' + desde;
    return this.http.get(url);
  }

  borrarUsuario(id: string) {
    let url = URL_SERVICIOS + '/usuario/' + id + '?tocken=' + this.token;
    console.log(url);
    return this.http.delete(url);
  }
}
