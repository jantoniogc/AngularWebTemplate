import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/services.index';
import { UsuarioService } from '../../../services/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [SidebarService, UsuarioService]
})
export class SidebarComponent implements OnInit {

  constructor(
    private _sidebarService: SidebarService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

}
