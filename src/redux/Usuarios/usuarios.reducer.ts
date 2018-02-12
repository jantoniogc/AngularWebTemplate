
import { AllActions, ADD_USUARIO } from "./usuarios.actions";
import { Usuarios } from "./usuarios.model";

const initialState: Usuarios = {
  usuarios: [],
  totalUsuarios: 0
};

export function usuariosReducer(state = initialState, action: AllActions): Usuarios {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case ADD_USUARIO: {
      return action.usuarios;
    }
    default: {
      return state;
    }
  }
}
