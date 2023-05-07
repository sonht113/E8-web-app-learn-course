import { Class } from './class.type';
import { Conversation } from './converation.type';
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

export type ConversationsPaginate = {
  results: Conversation[];
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

export type ClassPaginate = {
  results: Class[];
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
