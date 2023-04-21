import { AxiosResponse } from 'axios';
import { CoursePaginate } from 'types/paignate.type';
import http from 'utils/http';

export const getCourses = () => http.get('/courses');

export const getCourse = (id) => http.get(`/courses/${id}`);

export const searchCourse = async (
  title: string
): Promise<AxiosResponse<CoursePaginate, any>> => {
  return await http.get('/courses/paginate', {
    params: {
      title: `/^${title}/`,
    },
  });
};
