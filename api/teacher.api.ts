import http from 'utils/http';

export const getTeachers = () => {
  return http.get('/teachers');
};
