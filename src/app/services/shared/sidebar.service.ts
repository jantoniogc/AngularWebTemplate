import { Injectable } from '@angular/core';
import { AppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable()
export class SidebarService {

  public menu: any = [];

  // public menu: any = [
  //   {
  //     titulo: 'Principal',
  //     icono: 'mdi mdi-gauge',
  //     submenu: [
  //       {
  //         titulo: 'Dashboard',
  //         url: '/dashboard'
  //       },
  //       {
  //         titulo: 'ProgressBar',
  //         url: '/progress'
  //       },
  //       {
  //         titulo: 'Gráficas',
  //         url: '/graficas1'
  //       },
  //       {
  //         titulo: 'Promesas',
  //         url: '/promesas'
  //       },
  //       {
  //         titulo: 'Rxjs',
  //         url: '/rxjs'
  //       }
  //     ]
  //   },
  //   {
  //     titulo: 'Mantenimiento',
  //     icono: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       {
  //         titulo: 'Usuario',
  //         url: '/usuarios'
  //       },
  //       {
  //         titulo: 'Hospitales',
  //         url: '/hospitales'
  //       },
  //       {
  //         titulo: 'Medicos',
  //         url: '/medicos'
  //       }
  //     ]
  //   },
  //   {
  //     titulo: 'Otros',
  //     icono: 'mdi mdi-folder-account',
  //     submenu: [
  //       {
  //         titulo: 'About',
  //         url: '/about'
  //       },
  //       {
  //         titulo: 'Users',
  //         url: '/users'
  //       },
  //       {
  //         titulo: 'Cash',
  //         url: '/cash'
  //       },
  //       {
  //         titulo: 'Cars',
  //         url: '/cars'
  //       }
  //     ]
  //   }
  // ];

  constructor(
    private _usaurioService: UsuarioService
  ) {
    this.menu = this._usaurioService.menu;
   }

}
