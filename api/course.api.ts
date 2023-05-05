import { AxiosResponse } from 'axios';
import { CourseType } from 'types/course.type';
import { CoursePaginate } from 'types/paignate.type';
import http from 'utils/http';

export const getCourses = async (): Promise<AxiosResponse<CourseType[], any>> =>
  await http.get('/courses');

export const getCourse = async (
  id: string
): Promise<AxiosResponse<CourseType, any>> => await http.get(`/courses/${id}`);

export const searchCourse = async (
  title: string
): Promise<AxiosResponse<CoursePaginate, any>> => {
  return await http.get('/courses/paginate', {
    params: {
      title: `/^${title}/`,
    },
  });
};

export const updateCourse = async (data: {
  id: string;
  body: CourseType;
}): Promise<AxiosResponse<any, any>> =>
  await http.put(`/courses/${data.id}`, data.body);
