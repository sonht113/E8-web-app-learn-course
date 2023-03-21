/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

type IChatContext = {
  showMessage: boolean;
  isMobile: boolean;
  roomActive: string;
  setShowMessage: (v: boolean) => void;
  setRoomActive: (v: string) => void;
};

export const ChatContext = React.createContext<IChatContext>({
  showMessage: false,
  roomActive: '',
  isMobile: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowMessage: (v: boolean) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRoomActive: (v: string) => {},
});

export const ChatContextProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [roomActive, setRoomActive] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <ChatContext.Provider
      value={{
        showMessage,
        setShowMessage,
        roomActive,
        setRoomActive,
        isMobile,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
