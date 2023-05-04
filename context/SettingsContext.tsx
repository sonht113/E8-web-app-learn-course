import React, { useState } from 'react';

type ISettingsContext = {
  user: string;
};

export const SettingsContext = React.createContext<ISettingsContext>({
  user: '',
});

export const SettingsContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  return (
    <SettingsContext.Provider value={{ user }}>
      {children}
    </SettingsContext.Provider>
  );
};
