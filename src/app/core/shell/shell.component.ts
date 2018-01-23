import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor(
    translate: TranslateService
  ) {
    // translate.setDefaultLang('en');
    translate.setDefaultLang('es');
  }

  ngOnInit() {}
}
