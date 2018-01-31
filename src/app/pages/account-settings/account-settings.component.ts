import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {

  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }

  aplicarCheck(link: any) {
    console.log(document.getElementsByClassName('selector'));
    let selectores= Array.from(document.getElementsByClassName('selector'));
    selectores.forEach(element => {
      element.classList.remove('working');
    });
    link.classList.add('working');
  }
}
