import { Action } from '@ngrx/store';
import { Modal } from './modal.model';


export const SET_MODAL = '[MODAL] set';

export class SetModalAction implements Action {
  readonly type = SET_MODAL;

  constructor(
    public modalState: Modal
  ) { }
}


export type AllActions = SetModalAction;
