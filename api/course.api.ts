import http from 'utils/http';

export const getCourses = () => {
  return http.get('/courses');
};
