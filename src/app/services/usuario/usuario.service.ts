import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {

  public usuario: Usuario;
  public token: string;

  constructor(
    private http: HttpClient,
    private router: Router
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
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.cargarStorage();
    this.router.navigate(['/login']);
  }

  // login Google
  loginGoogle(token: string) {
    let url = URL_SERVICIOS + '/login/google'
    return this.http.post(url, { token: token })
      .map((resp: any) => {
        this.guardarStorage(resp.id, resp.tocken, resp.usuario);
        return true;
      });
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario)
      .map((resp: any) => {
        swal('Usuario creado', usuario.email, 'success');
        return resp.usuario;
      });
  }

}
