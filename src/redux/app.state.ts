import { User } from './user/user.model';
import { Usuario } from '../app/models/usuario.model';
import { Selected } from './Usuarios/selected/selected.model';
import { Usuarios } from './Usuarios/usuarios.model';
import { Modal } from './ModalUpload/modal.model';

export interface AppState {
  user: User[];
  filter: string;
  usuario: Usuario;
  usuarios: Usuarios;
  selected: Selected;
  modalUpload: Modal;
}
