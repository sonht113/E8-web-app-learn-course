/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';

import { DataLoginRegister, DataVerify } from 'types/auth.type';
import {
  login,
  sendOtpEmail,
  sendOtpPhone,
  signUp,
  verifyOtpEmail,
  verifyOtpPhone,
} from 'api/auth.api';
import { User } from 'types/user.type';
import { useRouter } from 'next/router';

type IAuthenContext = {
  user: User;
  setUser: (_v: any) => void;
  loginUser: (body: DataLoginRegister) => void;
  error: string;
  setError?: (_v: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated?: (_v: boolean) => void;
  signUpUser: (body: DataLoginRegister) => void;
  sendOTPEmail: (email: string) => void;
  sendOTPPhone: (phone: string) => void;
  otp: string;
  setOtp: (_v: string) => void;
  verifyOTPEmail: (body: DataVerify) => void;
  verifyOTPPhone: (body: DataVerify) => void;
  isVerifySuccessfully: { success: boolean; error: string };
};

export const AuthenContext = React.createContext<IAuthenContext>({
  user: {
    fullName: '',
    gender: '',
    role: '',
    favoriteCourses: [],
    myCourses: [],
    id: '',
  },
  setUser: (_v: any) => {},
  error: '',
  setError: (_v: string) => {},
  isAuthenticated: false,
  setIsAuthenticated: (_v: boolean) => {},
  loginUser: (body: DataLoginRegister) => {},
  signUpUser: (body: DataLoginRegister) => {},
  sendOTPEmail: (email: string) => {},
  sendOTPPhone: (phone: string) => {},
  otp: '',
  setOtp: (otp: string) => {},
  verifyOTPEmail: (body: DataVerify) => {},
  verifyOTPPhone: (body: DataVerify) => {},
  isVerifySuccessfully: { success: false, error: '' },
});

export const AuthenContextProvider = ({ children }) => {
  const [user, setUser] = useState<User>({
    fullName: '',
    gender: '',
    role: '',
    favoriteCourses: [],
    myCourses: [],
    id: '',
  });
  const [error, setError] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>('');
  const [isVerifySuccessfully, setIsVerifySuccessfully] = useState<{
    success: boolean;
    error: string;
  }>({ success: false, error: '' });

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

  const verifyOTPEmailMutate = useMutation({
    mutationFn: (body: DataVerify) => verifyOtpEmail(body),
  });

  const verifyOTPPhoneMutate = useMutation({
    mutationFn: (body: DataVerify) => verifyOtpPhone(body),
  });

  const loginUser = (body: DataLoginRegister) => {
    loginMutate.mutate(body, {
      onSuccess: (res) => {
        localStorage.setItem('access_token', res.data.accessToken);
        Cookies.set('refresh_token', res.data.refreshToken);
        localStorage.setItem('user_data', JSON.stringify(res.data.user));
        setUser(res.data.user);
        setIsAuthenticated(true);
      },
      onError(error: any) {
        setError(error.response.data.errors[0].detail);
        setIsAuthenticated(false);
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

  const sendOTPEmail = (email: string) => {
    sendOTPEmailMutate.mutate(email, {
      onSuccess: (res) => {
        setOtp(res.data);
      },
      onError: (error: any) => {
        console.log(error);
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
      },
    });
  };

  const verifyOTPEmail = (body: DataVerify) => {
    verifyOTPEmailMutate.mutate(body, {
      onSuccess: () => {
        setIsVerifySuccessfully({ success: true, error: '' });
      },
      onError: (error: any) => {
        setIsVerifySuccessfully({
          success: false,
          error: error?.response.data.errors[0].detail,
        });
      },
    });
  };

  const verifyOTPPhone = (body: DataVerify) => {
    verifyOTPPhoneMutate.mutate(body, {
      onSuccess: () => {
        setIsVerifySuccessfully({ success: true, error: '' });
      },
      onError: (error: any) => {
        setIsVerifySuccessfully({
          success: false,
          error: error?.response.data.errors[0].detail,
        });
      },
    });
  };

  useEffect(() => {
    otp === '' && setIsVerifySuccessfully({ success: false, error: '' });
  }, [otp]);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsAuthenticated(true);
      const user = JSON.parse(localStorage.getItem('user_data'));
      setUser(user);
    } else {
      localStorage.removeItem('user_data');
      setIsAuthenticated(false);
      setUser({
        fullName: '',
        gender: '',
        role: '',
        favoriteCourses: [],
        myCourses: [],
        id: '',
      });
    }
  }, []);

  return (
    <AuthenContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        error,
        isAuthenticated,
        setIsAuthenticated,
        signUpUser,
        sendOTPEmail,
        sendOTPPhone,
        otp,
        setOtp,
        verifyOTPEmail,
        verifyOTPPhone,
        isVerifySuccessfully,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
