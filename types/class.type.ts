import { CourseType } from './course.type';
import { User } from './user.type';

enum StatusClass {
  FINISH = 'FINISH',
  NEW = 'NEW',
}

export type Class = {
  _id?: string;
  endTime?: number;
  startTime?: number;
  courses?: CourseType[];
  desc?: string;
  thumbnail?: string;
  name: string;
  members: string[];
  teacher: string;
  createdAt?: string;
  updatedAt?: string;
  status?: StatusClass.FINISH | StatusClass.NEW;
};

export type ClassDetail = Partial<Class> & { teacher: User };
