
import { AllActions, ADD_USUARIO, DELETE_USUARIO, UPDATE_USUARIO } from "./usuarios.actions";
import { Usuarios } from "./usuarios.model";
import { forEach } from "@angular/router/src/utils/collection";

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
    case DELETE_USUARIO: {
      const listUsuarios = state.usuarios.filter((usuario) => {
        return usuario._id !== action.id;
      });
      console.log(listUsuarios);
      listUsuarios.forEach(element => {
        console.log(element);
      });
      return {
        usuarios: listUsuarios,
        totalUsuarios: state.totalUsuarios
      }
    }
    case UPDATE_USUARIO: {
      const listaUsuarios = state.usuarios.map((usuario) => {
        if (usuario._id === action.usuario._id) {
          return {
            ...usuario,
            email: action.usuario.email,
            nombre: action.usuario.nombre,
            role: action.usuario.role,
            img: action.usuario.img,
            google: action.usuario.google
          };
        } else {
          return usuario;
        }
      })
      return {
        usuarios: listaUsuarios,
        totalUsuarios: state.totalUsuarios
      }

    }
    default: {
      return state;
    }
  }
}
