import { User } from './user/user.model';
import { Usuario } from '../app/models/usuario.model';

export interface AppState {
  usuarios: User[];
  filter: string;
  usuario: Usuario;
}
