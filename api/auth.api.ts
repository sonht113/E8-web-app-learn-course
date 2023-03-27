import { AxiosResponse } from 'axios';
import { Auth, DataLoginRegister, DataVerify } from 'types/auth.type';
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

export const sendOtpEmail = (email: string) => {
  return http.post('/otps/send-otp-email', { email: email });
};

export const sendOtpPhone = (phone: string) => {
  return http.post('/otps/send-otp-phone', { phone: phone });
};

export const verifyOtpEmail = (body: DataVerify) => {
  return http.post('/otps/verify-otp-email', {
    email: body.email,
    otp: body.otp,
  });
};

export const verifyOtpPhone = (body: DataVerify) => {
  return http.post('/otps/verify-otp-phone', {
    phone: body.phone,
    otp: body.otp,
  });
};
