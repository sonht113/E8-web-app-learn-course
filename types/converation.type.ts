import { User } from './user.type';

enum RoleConversationEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type Conversation = {
  _id: string;
  users: Pick<User, 'id'>[];
  chatName: string;
  isGroup: boolean;
  avatar: string;
  lastestMessage: { idUser: string; text: string };
  admin: boolean;
};

export type ConversationCreate = {
  users: string[];
  chatName: string;
  isGroup: boolean;
  avatar: string;
  latestMessage?: string;
  role?: RoleConversationEnum;
};
