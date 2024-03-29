import { User } from './user.type';

export type DataLoginRegister = {
  fullName?: string;
  email?: string;
  phone?: string;
  otpCode?: string | number;
  password?: string;
};

export type DataLoginSocial = {
  fullName: string;
  email?: string;
  tokenLogin: string;
  avatar: string;
};

export type Auth = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
