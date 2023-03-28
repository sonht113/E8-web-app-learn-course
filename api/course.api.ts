import http from 'utils/http';

export const gerCourses = () => {
  return http.get('/courses');
};
