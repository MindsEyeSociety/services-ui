import {
  User
} from '../models';

export interface Session {
  userToken: string;
  user: User;
  fooBar: string;
}
