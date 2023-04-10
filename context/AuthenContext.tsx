import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { DataLoginRegister } from 'types/auth.type';
import { login, sendOtpEmail, sendOtpPhone, signUp } from 'api/auth.api';
import { User } from 'types/user.type';
import { useRouter } from 'next/router';
import { getMe } from 'api/user.api';
import useToastify from 'hook/useToastify';

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
  otp: { value: string; loading: boolean };
  setOtp: (_v: { value: string; loading: boolean }) => void;
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
  otp: { value: '', loading: false },
  loading: true,
  setOtp: (otp: { value: string; loading: boolean }) => {},
});

export const AuthenContextProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [otp, setOtp] = useState<{ value: string; loading: boolean }>({
    value: '',
    loading: false,
  });
  const toast = useToastify();
  const DURATION_TOAST = 3000;

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
        toast.handleOpenToastify(
          'success',
          'Đăng nhập thành công',
          DURATION_TOAST
        );
        setUser(res.data.user);
      },
      onError(error: any) {
        setError(error.response.data.errors[0].detail);
        toast.handleOpenToastify(
          'error',
          error.response.data.errors[0].detail,
          DURATION_TOAST
        );
      },
    });
  };

  const signUpUser = (body: DataLoginRegister) => {
    signUpMutate.mutate(body, {
      onSuccess: (res) => {
        toast.handleOpenToastify(
          'success',
          'Đăng ký thành công',
          DURATION_TOAST
        );
        router.push('/login');
      },
      onError: (error: any) => {
        toast.handleOpenToastify(
          'error',
          error.response.data.errors[0].detail,
          DURATION_TOAST
        );
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
    setOtp({ ...otp, loading: true });
    sendOTPEmailMutate.mutate(email, {
      onSuccess: (res) => {
        setOtp({
          value: res.data,
          loading: false,
        });
      },
      onError: (error: any) => {
        setOtp({ ...otp, loading: false });
        toast.handleOpenToastify(
          'error',
          error.response.data.errors[0].detail,
          DURATION_TOAST
        );
      },
    });
  };

  const sendOTPPhone = (phone: string) => {
    setOtp({ ...otp, loading: true });
    sendOTPPhoneMutate.mutate(phone, {
      onSuccess: (res) => {
        setOtp({
          value: res.data,
          loading: false,
        });
      },
      onError: (error: any) => {
        setOtp({ ...otp, loading: false });
        toast.handleOpenToastify(
          'error',
          error.response.data.errors[0].detail,
          DURATION_TOAST
        );
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
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
