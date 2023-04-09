/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { DataLoginRegister } from 'types/auth.type';
import { login, sendOtpEmail, sendOtpPhone, signUp } from 'api/auth.api';
import { User } from 'types/user.type';
import { useRouter } from 'next/router';
import { getMe } from 'api/user.api';

declare global {
  type unknow = any;
}

type IAuthenContext = {
  user: User | null;
  setUser: (_v: any) => void;
  loginUser: (body: DataLoginRegister) => void;
  error: string;
  loading: boolean;
  setError?: (_v: string) => void;
  isAuthenticated: boolean;
  signUpUser: (body: DataLoginRegister) => void;
  signOutUser: () => void;
  sendOTPEmail: (email: string) => void;
  sendOTPPhone: (phone: string) => void;
  otp: string;
  setOtp: (_v: string) => void;
  errorOTP: string;
};

export const AuthenContext = React.createContext<IAuthenContext>({
  user: null,
  setUser: (_v: any) => {},
  error: '',
  setError: (_v: string) => {},
  isAuthenticated: false,
  loginUser: (body: DataLoginRegister) => {},
  signUpUser: (body: DataLoginRegister) => {},
  signOutUser: () => {},
  sendOTPEmail: (email: string) => {},
  sendOTPPhone: (phone: string) => {},
  otp: '',
  loading: true,
  setOtp: (otp: string) => {},
  errorOTP: '',
});

export const AuthenContextProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const [errorOTP, setErrorOTP] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [otp, setOtp] = useState<string>('');

  const router = useRouter();

  const loginMutate = useMutation({
    mutationFn: (body: DataLoginRegister) => login(body),
  });

  const signUpMutate = useMutation({
    mutationFn: (body: DataLoginRegister) => signUp(body),
  });

  const sendOTPEmailMutate = useMutation({
    mutationFn: (email: string) => sendOtpEmail(email),
  });

  const sendOTPPhoneMutate = useMutation({
    mutationFn: (phone: string) => sendOtpPhone(phone),
  });

  const loginUser = (body: DataLoginRegister) => {
    loginMutate.mutate(body, {
      onSuccess: (res) => {
        Cookies.set('access_token', res.data.accessToken);
        Cookies.set('refresh_token', res.data.refreshToken);
        localStorage.setItem('user_data', JSON.stringify(res.data.user));
        setUser(res.data.user);
      },
      onError(error: any) {
        setError(error.response.data.errors[0].detail);
      },
    });
  };

  const signUpUser = (body: DataLoginRegister) => {
    signUpMutate.mutate(body, {
      onSuccess: (res) => {
        console.log(res);
        router.push('/login');
      },
      onError: (error: any) => {
        console.log(error);
      },
    });
  };

  const signOutUser = () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    localStorage.removeItem('user_data');
    window.location.replace('/');
  };

  const sendOTPEmail = (email: string) => {
    sendOTPEmailMutate.mutate(email, {
      onSuccess: (res) => {
        setOtp(res.data);
      },
      onError: (error: any) => {
        console.log(error);
        setErrorOTP(error.respone.data.errors[0].detail);
      },
    });
  };

  const sendOTPPhone = (phone: string) => {
    sendOTPPhoneMutate.mutate(phone, {
      onSuccess: (res) => {
        setOtp(res.data);
      },
      onError: (error: any) => {
        console.log(error);
        setErrorOTP(error.respone.data.errors[0].detail);
      },
    });
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      const accessToken = Cookies.get('access_token');
      if (accessToken) {
        const res = await getMe('groups', 'groups.name');
        if (res) setUser(res?.data);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  return (
    <AuthenContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        setUser,
        loginUser,
        error,
        signUpUser,
        signOutUser,
        sendOTPEmail,
        sendOTPPhone,
        otp,
        setOtp,
        errorOTP,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
