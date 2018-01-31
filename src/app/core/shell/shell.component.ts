import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

//Llamado un funcion java script externa a Angular y typeScritp. Se ha creado una función
//init_plugins() en la librería /assent/js/custom.js que nos permite recargar los plugins
//de terceros
declare function init_plugins();

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {
    init_plugins();
  }
}
