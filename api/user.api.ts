import { AxiosResponse } from 'axios';
import { User, UserDetail } from 'types/user.type';
import http from 'utils/http';

export const getUsers = async (): Promise<AxiosResponse<User[], any>> => {
  return http.get('/users');
};

export const getMe = async (
  populate: string,
  fields: string
): Promise<AxiosResponse<User, any>> => {
  return await http.get<User>('/users/me', {
    params: {
      populate: populate,
      fields: fields,
    },
  });
};

export const getUser = async (
  idUser: string,
  populate?: string
): Promise<AxiosResponse<UserDetail, any>> => {
  if (populate) {
    return await http.get(`/users/${idUser}`, {
      params: {
        populate: populate,
      },
    });
  }
  return await http.get(`/users/${idUser}`);
};

export const updateUser = async (data: { id: string; body: User }) =>
  await http.put(`/users/${data.id}`, data.body);
