/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const ACTIVE_DEFAULT = 1;

type IActiveMenuContext = {
  activeMenu: number;
  setActiveMenu: (v: number) => void;
};

export const ActiveMenuContext = React.createContext<IActiveMenuContext>({
  activeMenu: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveMenu: (v: number) => {},
});

export const ActiveMenuContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<number>(ACTIVE_DEFAULT);

  useEffect(() => {
    const active = Number(localStorage.getItem('active_menu'));
    active ? setActiveMenu(active) : setActiveMenu(ACTIVE_DEFAULT);
  }, []);

  return (
    <ActiveMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </ActiveMenuContext.Provider>
  );
};
