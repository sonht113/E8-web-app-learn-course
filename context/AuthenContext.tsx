/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import Cookies from 'js-cookie';

import { DataLoginRegister } from 'types/auth.type';
import { login } from 'api/auth.api';
import { User } from 'types/user.type';

type IAuthenContext = {
  user: User;
  setUser: (_v: any) => void;
  loginUser: (body: DataLoginRegister) => void;
  error: string;
  setError?: (_v: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated?: (_v: boolean) => void;
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
  loginUser: (body: DataLoginRegister) => {},
  error: '',
  setError: (_v: string) => {},
  isAuthenticated: false,
  setIsAuthenticated: (_v: boolean) => {},
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
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginMutate = useMutation({
    mutationFn: (body: DataLoginRegister) => login(body),
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
      }}
    >
      {children}
    </AuthenContext.Provider>
  );
};
