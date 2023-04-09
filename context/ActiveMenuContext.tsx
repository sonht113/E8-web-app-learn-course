import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ACTIVE_DEFAULT = '/';

type IActiveMenuContext = {
  activeMenu: string;
  setActiveMenu: (v: string) => void;
};

export const ActiveMenuContext = React.createContext<IActiveMenuContext>({
  activeMenu: ACTIVE_DEFAULT,
  setActiveMenu: (v: string) => {},
});

export const ActiveMenuContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<string>(ACTIVE_DEFAULT);
  const router = useRouter();

  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  return (
    <ActiveMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </ActiveMenuContext.Provider>
  );
};
