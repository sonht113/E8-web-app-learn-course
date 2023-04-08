export type ChapterType = {
  _id?: string;
  title?: string;
  idCourses?: string;
  position?: number;
  lectures?: LectureType[];
};

export type LectureType = {
  _id?: string;
  title?: string;
  position?: number;
  lesson?: number;
  type?: string;
  totalTimes?: number;
  url?: string;
  idChapter?: string;
};
