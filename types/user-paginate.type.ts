import { User } from './user.type';

export type UserPaginate = {
  results: User[];
  totalResults?: number;
  limit?: number;
  totalPages?: number;
  page?: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: any;
  nextPage?: any;
};
