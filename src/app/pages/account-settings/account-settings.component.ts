import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  providers: [SettingsService]
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    private ajustesServices: SettingsService
  ) { }

  ngOnInit() {

  }

  cambiarColor(tema: string, link: any) {
    this.aplicarCheck(link);
    this.ajustesServices.aplicarTema(tema);
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
