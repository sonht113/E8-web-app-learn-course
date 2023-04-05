import { User } from './user.type';

enum FileType {
  'IMAGE',
  'FILE',
  'TEXT',
}

export type Message = {
  idChat: string;
  sender: string;
  readers: Pick<User, 'id'>[] | string[];
  content: string;
  fileType: FileType.IMAGE | FileType.FILE | FileType.TEXT;
};
