import { AxiosResponse } from 'axios';
import { ClassDetail } from 'types/class.type';
import { ClassPaginate } from 'types/paignate.type';
import http from 'utils/http';

export const getClassesApi = async (): Promise<
  AxiosResponse<ClassPaginate, any>
> => {
  return await http.get('/class-rooms/paginate', {
    params: {
      populate: 'teacher',
    },
  });
};

export const getClassDetailApi = async (
  id: string,
  query: string
): Promise<AxiosResponse<ClassDetail, any>> => {
  return await http.get(`/class-rooms/${id}`, {
    params: {
      populate: query,
    },
  });
};
