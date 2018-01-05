import { User } from './user/user.model';

export interface AppState {
  usuarios: User[];
  filter: string;
}
