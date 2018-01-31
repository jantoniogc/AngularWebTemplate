import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private _router: Router
  ) {
    translate.setDefaultLang('es');
  }

  ngOnInit() { }

  ingresar() {
    console.log('Ingresando');
    this._router.navigate(['/dashboard']);
  }
}
