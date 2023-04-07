/* eslint-disable @typescript-eslint/no-explicit-any */
export type CourseType = {
  _id?: string;
  idCategories?: string;
  instructor?: Instructor[];
  title?: string;
  target?: string;
  targetDetails?: TargetDetails[];
  totalChapter?: number | string;
  totalLectures?: string | number;
  totalTime?: number | string;
  requirements?: Requirement[];
  desc?: number | string;
  isFree?: boolean;
  price?: number | string;
  promotionPrice?: string | number;
  thumbnail?: string;
  totalViews?: string | number;
  totalLikes?: string | number;
  totalDislikes?: string | number;
  tags?: string[];
  isPrivate?: boolean;
  userJoined?: string[]; // [idUser]
  classesJoined?: string[]; // [idClasses]
};

export type CourseViewHome = Pick<
  CourseType,
  '_id' | 'title' | 'thumbnail' | 'isPrivate' | 'price' | 'totalViews'
>;

type Instructor = {
  position: string;
  idUser: string;
  fullName: string;
};

type TargetDetails = {
  position: string;
  text: string;
  icon: any;
};

type Requirement = { position: string; text: string; icon: string };
