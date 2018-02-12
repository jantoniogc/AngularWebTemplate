import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { RequestLoginGoogleUserAction } from '../../../redux/usuario/usuario.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../redux/app.state';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public email: string;
  public recuerdame: boolean = false;
  public auth2: any;

  constructor(
    private translate: TranslateService,
    private _router: Router,
    private usuarioService: UsuarioService,
    private store: Store<AppState>
  ) {
    translate.setDefaultLang('es');
    this.store.select('usuario')
      .subscribe((usuario) => {
        this.usuarioService.usuario = usuario;
      });
  }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '726985027636-0e9chlncebk5fff03t9v01ha72q0aspp.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));


    })
  }

  attachSignin(element) {
    return this.auth2.attachClickHandler(element, {}, googleUser => {
      let token = googleUser.getAuthResponse().id_token;
      // usamos banillajs "window.location.href" por problema en el template al usar los router [NPI]
      const action = new RequestLoginGoogleUserAction(googleUser.getAuthResponse().id_token);
      this.store.dispatch(action);
    });
  }

  ingresar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let usuario: Usuario = {
      nombre: null,
      email: form.value.email,
      password: form.value.password
    };
    this.usuarioService.login(usuario, form.value.recuerdame).subscribe(resp => this._router.navigate(['/dashboard']));
  }
}
