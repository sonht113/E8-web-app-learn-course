import { User } from './user.type';

export enum FileType {
  IMAGE = 'IMAGE',
  FILE = 'FILE',
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
}

export type Message = {
  idConversation: string;
  id?: string;
  sender: User;
  readers: Pick<User, '_id'>[] | string[];
  content: string;
  fileType: FileType.IMAGE | FileType.FILE | FileType.TEXT | FileType.AUDIO;
  updatedAt?: string;
  createdAt?: string;
  _id?: string;
};

export type MessageCreateType = Omit<Message, 'sender'> & { sender: string };
