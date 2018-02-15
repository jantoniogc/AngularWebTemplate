import { Action } from '@ngrx/store';
import { SET_MODAL, AllActions } from './modal.actions';

import { Modal } from './modal.model';

const initState: Modal = {
  estado: 'oculto',
  tipoArchivo: '',
  usuarioId: ''
}

export function ModalReducer(oldState = initState, action: AllActions): Modal {
  switch (action.type) {
    case SET_MODAL: {
      return action.modalState;
    }
    default: {
      return oldState;
    }
  }
}
