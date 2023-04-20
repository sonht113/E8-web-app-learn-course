enum RoleConversationEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type Conversation = {
  _id: string;
  users: string[];
  chatName: string;
  isGroup: boolean;
  avatar: string;
  lastestMessage?: { idUser: string; text: string };
  role?: RoleConversationEnum.ADMIN | RoleConversationEnum.USER;
  createdAt?: string;
  updatedAt?: string;
};

export type ConversationCreate = {
  users: string[];
  chatName: string;
  isGroup: boolean;
  avatar: string;
  latestMessage?: string;
  role?: RoleConversationEnum.ADMIN;
};

export type ConversationUpdate = Partial<ConversationCreate>;
