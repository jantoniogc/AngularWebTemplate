import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/services.index';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [SettingsService]
})
export class PagesComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { }

  ngOnInit() {
  }

}
