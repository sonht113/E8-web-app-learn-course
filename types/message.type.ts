import { User } from './user.type';

export enum FileType {
  IMAGE = 'IMAGE',
  FILE = 'FILE',
  TEXT = 'TEXT',
  AUDIO = 'AUDIO',
}

export type MessageSocket = {
  idConversation: string;
  idChat?: string;
  sender: { id: string; fullName: string; avatar: string };
  readers: Pick<User, '_id'>[] | string[];
  content: string;
  fileType: FileType.IMAGE | FileType.FILE | FileType.TEXT | FileType.AUDIO;
};

export type Message = {
  idConversation: string;
  idChat?: string;
  sender: string;
  readers: Pick<User, '_id'>[] | string[];
  content: string;
  fileType: FileType.IMAGE | FileType.FILE | FileType.TEXT | FileType.AUDIO;
};
