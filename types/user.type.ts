import { CourseType } from './course.type';

export enum TypeUser {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
}

type Notification = {
  content: string;
};

type APIDenie = {
  api: string;
};

type APIAccess = {
  api: string;
};

type Group = {
  id: string;
};

type GroupDetail = {
  accessMethods: string[];
  createdAt?: string;
  id: string;
  idGroupDetail: string;
};

interface IDCourse extends CourseType {
  classesJoined: string[];
  usersJoined: string[];
}

export type MyLearningCourses = {
  _id: string;
  currentLesson: number;
  idCourse: IDCourse;
};

export type User = {
  favoriteCourses?: CourseType[];
  myCourses?: CourseType[];
  receivedNotificationTypes?: Notification[];
  isDeleted?: boolean;
  deviceID?: string;
  isEnableFCM?: string;
  dateOfBirth?: string | number;
  gender?: string;
  avatar?: string;
  street?: string;
  email?: string;
  phone?: string;
  fullName: string;
  role?: string;
  groupAPIDenines?: APIDenie[];
  groupAPIAccesses?: APIAccess[];
  groups?: Group[];
  _id: string;
  groupDetails?: GroupDetail[];
  myLearningCourses?: MyLearningCourses[];
  createdAt?: string;
  updatedAt?: string;
  typeUser?: TypeUser.STUDENT | TypeUser.TEACHER;
  slug?: string;
};
