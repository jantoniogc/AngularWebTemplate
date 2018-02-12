import { Selected } from './selected.model';
import { AllActions, SELECT_USUARIOS, SELECT_USUARIOS_BY_BUSQUEDA } from './selected.actions';

const initialState: Selected = {
  desde: 0,
  busqueda: ''
};

export function selectedUsuarioReducer(state: Selected = initialState, action: AllActions): Selected {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case SELECT_USUARIOS:
      return action.selected;
    case SELECT_USUARIOS_BY_BUSQUEDA:
      return action.selected;
    default:
      return state;
  }
}
