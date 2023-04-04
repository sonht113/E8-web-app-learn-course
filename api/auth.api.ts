import { AxiosResponse } from 'axios';
import { Auth, DataLoginRegister, DataVerify } from 'types/auth.type';
import http from 'utils/http';

export const login = async (
  body: DataLoginRegister
): Promise<AxiosResponse<Auth, any>> => {
  return await http.post<Auth>('/auth/signin', body);
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

export const verifyOtpEmail = (body: DataVerify) => {
  return http.put('/otps/verify-otp-email', {
    email: body.email,
    otpCode: body.otpCode,
  });
};

export const verifyOtpPhone = (body: DataVerify) => {
  return http.put('/otps/verify-otp-phone', {
    phone: body.phone,
    otpCode: body.otpCode,
  });
};
