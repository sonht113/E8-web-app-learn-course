/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

type IAuthenContext = {
  user: any;
  setUser: (_v: any) => void;
};

export const AuthenContext = React.createContext<IAuthenContext>({
  user: {},
  setUser: (_v: any) => {},
});

export const AuthenContextProvider = ({ children }) => {
  const [user, setUser] = useState<any>({});

  return (
    <AuthenContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenContext.Provider>
  );
};
