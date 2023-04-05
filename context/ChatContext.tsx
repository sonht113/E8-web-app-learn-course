/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type IChatContext = {
  showMessage: boolean;
  isMobile: boolean;
  roomActive: string;
  setShowMessage: (v: boolean) => void;
  setRoomActive: (v: string) => void;
  selectRoom: (idRoom: string) => void;
};

export const ChatContext = React.createContext<IChatContext>({
  showMessage: false,
  roomActive: '',
  isMobile: false,
  setShowMessage: (_v: boolean) => {},
  setRoomActive: (_v: string) => {},
  selectRoom: (_idRoom: string) => {},
});

export const ChatContextProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [roomActive, setRoomActive] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  const selectRoom = (roomId: string) => {
    setRoomActive(roomId);
    router.push(`/chat?room=${roomId}`);
  };

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
        selectRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
