enum RoleConversationEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type Conversation = {
  _id: string;
  id?: string;
  users: string[];
  chatName: string;
  isGroup: boolean;
  avatar: string;
  latestMessage?: { idUser: string; text: string };
  role?: RoleConversationEnum.ADMIN | RoleConversationEnum.USER;
  createdAt?: string;
  updatedAt?: string;
};

type UserInfo = {
  fullName?: string;
  idUser?: string;
  avatar?: string;
  slug?: string;
};

export type ConversationCreate = {
  users: string[];
  chatName: string;
  isGroup: boolean;
  avatar: string;
  latestMessage?: {
    user: UserInfo;
    text: string;
  };
  role?: RoleConversationEnum.ADMIN;
};

export type ConversationUpdate = Partial<ConversationCreate>;
