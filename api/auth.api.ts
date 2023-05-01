import { AxiosResponse } from 'axios';
import { Auth, DataLoginRegister } from 'types/auth.type';
import http from 'utils/http';

export const login = async (
  body: DataLoginRegister
): Promise<AxiosResponse<Auth, any>> => {
  return await http.post<Auth>('/auth/signin', body);
};

export const loginWithSocial = async (
  tokenLogin: string
): Promise<AxiosResponse<Auth, any>> => {
  return await http.post<Auth>('/auth/signin-with-social', tokenLogin);
};

export const signUp = async (
  body: DataLoginRegister
): Promise<AxiosResponse<any, any>> => {
  return await http.post('/auth/signup', body);
};

export const sendOtpEmail = async (email: string) => {
  return await http.post('/otps/send-otp-email', { email: email });
};

export const sendOtpPhone = async (phone: string) => {
  return await http.post('/otps/send-otp-phone', { phone: phone });
};
