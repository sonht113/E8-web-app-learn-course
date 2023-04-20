import { AxiosResponse } from 'axios';
import { User } from 'types/user.type';
import http from 'utils/http';

export const getMe = async (populate: string, fields: string) => {
  return await http.get<User>('/users/me', {
    params: {
      populate: populate,
      fields: fields,
    },
  });
};

export const getUser = async (
  idUser: string,
  populate: string
): Promise<AxiosResponse<any, any>> => {
  if (populate) {
    return await http.get(`/users/${idUser}`, {
      params: {
        populate: populate,
      },
    });
  }
  return await http.get(`/users/${idUser}`);
};
