import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit() {}
}
