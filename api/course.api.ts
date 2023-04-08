import http from 'utils/http';

export const getCourses = () => http.get('/courses');

export const getCourse = (id) => http.get(`/courses/${id}`);
