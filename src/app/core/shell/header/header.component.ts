import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/services.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[UsuarioService]
})
export class HeaderComponent implements OnInit {

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

}
