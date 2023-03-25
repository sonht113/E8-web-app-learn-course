import { AxiosResponse } from 'axios';
import { Auth, DataLoginRegister } from 'types/auth.type';
import http from 'utils/http';

export const login = (
  body: DataLoginRegister
): Promise<AxiosResponse<Auth, any>> => {
  return http.post<Auth>('/auth/signin', body);
};

export const signUp = (
  body: DataLoginRegister
): Promise<AxiosResponse<any, any>> => {
  return http.post('/auth/signup', body);
};
