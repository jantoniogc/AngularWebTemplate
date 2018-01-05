import { Action } from '@ngrx/store';
import { User } from './user.model';
import { AllActions, USER_ADD, USER_REMOVE, USER_TOGGLE, USER_UPDATE } from './user.actions';

export function usuariosReducer(oldState: User[] = [], action: AllActions): User[] {
         switch (action.type) {
           case USER_ADD: {
             return [...oldState, action.newUser];
           }
           case USER_REMOVE: {
             return oldState.filter(user => {
               return user.id !== action.id;
             });
           }
           case USER_TOGGLE: {
             return oldState.map(user => {
               if (user.id === action.id) {
                 console.log('' + user.id);
                 console.log('' + !user.activo);
                 return { ...user, activo: !user.activo };
               } else {
                 return user;
               }
             });
           }
           case USER_UPDATE: {
             return oldState.map(user => {
               if (user.id === action.id) {
                 return { ...user, nombre: action.newNombre };
               } else {
                 return user;
               }
             });
           }
           default: {
             return oldState;
           }
         }
       }
