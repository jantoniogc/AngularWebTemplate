import { Busqueda } from "./busqueda.model";
import { Action } from "@ngrx/store";

export const SELECT_BUSQUEDA = 'SELECT_BUSQUEDA';

export class SelectBusquedatAction implements Action {
  readonly type = SELECT_BUSQUEDA;

  constructor(
    public busqueda: Busqueda
  ) { }
}

export type AllActions = SelectBusquedatAction;
