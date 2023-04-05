import { User } from './user.type';

export type Conversation = {
  users: Pick<User, 'id'>[];
  chatName: string;
  isGroup: boolean;
  avatar: string;
  lastestMessage: { idUser: string; text: string };
  admin: boolean;
};
