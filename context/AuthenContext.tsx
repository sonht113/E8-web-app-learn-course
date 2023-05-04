import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';

import { DataLoginRegister, DataLoginSocial } from 'types/auth.type';
import {
  login,
  loginWithSocial,
  sendOtpEmail,
  sendOtpPhone,
  signUp,
} from 'api/auth.api';
import { User } from 'types/user.type';
import { getMe } from 'api/user.api';
import useToastify from 'hook/useToastify';
import { CourseViewPopUp } from 'types/course.type';
import { auth, providerFacebook, providerGoogle } from '../firebase';

declare global {
  type unknow = any;
}

type IAuthenContext = {
  user: User | null;
  setUser: (_v: any) => void;
  loginUser: (body: DataLoginRegister) => void;
  loginGoogle: () => void;
  loginFacebook: () => void;
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
  myCourses: CourseViewPopUp[];
};

export const AuthenContext = React.createContext<IAuthenContext>({
  user: null,
  setUser: (_v: any) => {},
  error: '',
  setError: (_v: string) => {},
  isAuthenticated: false,
  loginUser: (body: DataLoginRegister) => {},
  loginFacebook: () => {},
  loginGoogle: () => {},
  signUpUser: (body: DataLoginRegister) => {},
  signOutUser: () => {},
  sendOTPEmail: (email: string) => {},
  sendOTPPhone: (phone: string) => {},
  otp: { value: '', loading: false },
  loading: true,
  setOtp: (otp: { value: string; loading: boolean }) => {},
  myCourses: [],
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

  const loginSocialMutate = useMutation({
    mutationFn: (body: DataLoginSocial) => loginWithSocial(body),
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

  const loginSocialUser = (body: DataLoginSocial) => {
    loginSocialMutate.mutate(body, {
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
        router.push('/');
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

  const loginGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const user = result.user;
        console.log(user);
        loginSocialUser({
          fullName: user.displayName,
          email: user.email,
          tokenLogin: user.uid,
          avatar: user.photoURL,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.handleOpenToastify('error', errorMessage, DURATION_TOAST);
      });
  };

  const loginFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
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
        loginFacebook,
        loginGoogle,
        error,
        signUpUser,
        signOutUser,
        sendOTPEmail,
        sendOTPPhone,
        otp,
        setOtp,
        myCourses: user?.myCourses,
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
