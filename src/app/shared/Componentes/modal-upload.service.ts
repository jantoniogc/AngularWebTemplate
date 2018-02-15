import { Injectable, EventEmitter } from '@angular/core';
import { } from 'events';
import { Action } from 'rxjs/scheduler/Action';
import { AppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { SetModalAction } from '../../../redux/ModalUpload/modal.actions';
import { Modal } from '../../../redux/ModalUpload/modal.model';

@Injectable()
export class ModalUploadService {

  public oculto: string = 'oculto';

  public notificacion = new EventEmitter();

  constructor(
    private _store: Store<AppState>
  ) {
    console.log('Modal Upload Service Listo')
  }

  ocultarModal() {
    const modal: Modal = {
      estado: '',
      tipoArchivo: null,
      usuarioId: null
    }
    const action = new SetModalAction({
      estado: 'oculto',
      tipoArchivo: '',
      usuarioId: ''
    });
    this._store.dispatch(action);
  }

  mostrarModal( tipo: string, id: string) {
    const modal: Modal = {
      estado: '',
      tipoArchivo: tipo,
      usuarioId: id
    }
    const action = new SetModalAction(modal);
    this._store.dispatch(action);
  }
}
