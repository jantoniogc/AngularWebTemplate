import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  providers: [SettingsService]
})
export class ShellComponent implements OnInit {
  constructor(
    translate: TranslateService,
    _ajustes: SettingsService
  ) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {}
}
