import { Action } from '@ngrx/store';


export const SET_FILTER = '[FILTER] set';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(
    public newFilter: string
  ) { }
}


export type AllActions = SetFilterAction;

