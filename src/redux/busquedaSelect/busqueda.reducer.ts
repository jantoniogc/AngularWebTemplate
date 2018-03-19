import { Busqueda } from "./busqueda.model";
import { SELECT_BUSQUEDA, AllActions } from "./busqueda.action";

const initialState: Busqueda= {
  search:''
};

export function selectedBusquedaReducer(state: Busqueda = initialState, action: AllActions): Busqueda {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case SELECT_BUSQUEDA:
      return action.busqueda
    default:
      return state;
  }
}
