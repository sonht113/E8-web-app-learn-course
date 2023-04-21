import { CourseType } from './course.type';

export type CoursePaginate = {
  results: CourseType[];
  totalResults: number | string;
  limit: number | string;
  totalPages: string | number;
  page: number | string;
  pagingCounter: number | string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: any;
  nextPage: any;
};
