import { AxiosResponse } from 'axios';
import { LearningPath } from 'types/learningPaths.type';
import http from 'utils/http';

export const getLearningPaths = (): Promise<
  AxiosResponse<LearningPath, any>
> => {
  return http.get('/learning-paths/paginate?populate=courses');
};
