import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { AppState } from '../../redux/app.state';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  constructor () { }

  transform(img: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + '/img';

    if (!img) {
      return url + '/imagen/xxx'
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + img;
        break;

      case 'medico':
        url += '/medicos/' + img;
        break;

      case 'hospital':
        url += '/hospitales/' + img;
        break;
      default:
        console.log('Tipo de imagen no existe , usuarios, medicos, hospitales');
        url += '/usuarios/xxx';
    }
    return url;
  }

}
