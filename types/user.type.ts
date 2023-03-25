import { Course } from './course.type';

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

export type User = {
  favoriteCourses: Course[];
  myCourses: Course[];
  receivedNotificationTypes?: Notification[];
  isDeleted?: boolean;
  deviceID?: string;
  isEnableFCM?: string;
  dateOfBirth?: string | number;
  gender: string;
  avatar?: string;
  street?: string;
  email?: string;
  phone?: string;
  fullName: string;
  role: string;
  groupAPIDenines?: APIDenie[];
  groupAPIAccesses?: APIAccess[];
  groups?: Group[];
  id: string;
  groupDetails?: GroupDetail[];
  myLearningCourses?: Course[];
  createdAt?: string;
  updatedAt?: string;
};
