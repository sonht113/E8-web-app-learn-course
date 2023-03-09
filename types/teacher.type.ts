import { Course } from './course.type';

export type Teacher = {
  idUserDetail?: string;
  idUserRight?: string;
  role?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  authKey?: string;
  userName?: string;
  password?: string;
  accountType?: string;
  profilePicture?: string;
  coverPhoto?: string;
  deviceID?: string;
  fcmTokens?: string;
  enableFcm?: boolean;
  gender?: string;
  dateOfBirth?: string;
  slug?: string;
  deleted?: boolean;
  myCourses: Pick<Course, 'id'>[];
  myLearningCourses: MyLearningCourse[];
  favoriteCourses: Pick<Course, 'id'>[];
};

export type TeacherViewHome = Pick<
  Teacher,
  'idUserDetail' | 'fullName' | 'email' | 'phone' | 'profilePicture'
>;

type MyLearningCourse = {
  idCourse: Pick<Course, 'id'>;
  currentLesson: string;
};
