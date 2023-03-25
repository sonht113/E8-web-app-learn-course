import { User } from './user.type';

export type DataLoginRegister = {
  fullName?: string;
  email?: string;
  phone?: string;
  otp?: string | number;
  password?: string;
};

export type Auth = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
