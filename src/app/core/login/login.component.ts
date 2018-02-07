import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';

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
    private usuarioService: UsuarioService
  ) {
    translate.setDefaultLang('es');
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
    this.auth2.attachClickHandler(element, {}, googleUser => {
      let token = googleUser.getAuthResponse().id_token;
      // usamos banillajs "window.location.href" por problema en el template al usar los router [NPI]
      this.usuarioService.loginGoogle(token).subscribe(() => window.location.href= '#/dashboard');
    });
  }

  ingresar(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let usuario = new Usuario(
      null,
      form.value.email,
      form.value.password
    );
    this.usuarioService.login(usuario, form.value.recuerdame).subscribe(resp => this._router.navigate(['/dashboard']));
  }
}
