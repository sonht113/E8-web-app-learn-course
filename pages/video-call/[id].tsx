import React, { useContext, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import { AuthenContext } from 'context/AuthenContext';
import { ChatContext, ChatContextProvider } from 'context/ChatContext';

const VideoCall = () => {
  const { user } = useContext(AuthenContext);
  const router = useRouter();
  const { isMobile } = useContext(ChatContext);

  const roomId = String(router.query.id);

  const myMeeting = async (element: HTMLElement | undefined | null) => {
    const appId = Number(process.env.NEXT_PUBLIC_APP_ID);
    const serverSecret = String(process.env.NEXT_PUBLIC_SERVER_SECRET);
    const { ZegoUIKitPrebuilt } = await import(
      '@zegocloud/zego-uikit-prebuilt'
    );
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      user?.fullName ? user?.fullName : 'User'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showLeavingView: true,
      showPinButton: true,
      lowerLeftNotification: {
        showUserJoinAndLeave: true,
        showTextChat: true,
      },
      showTurnOffRemoteCameraButton: false,
      showTurnOffRemoteMicrophoneButton: false,
      showRemoveUserButton: false,
      onUserAvatarSetter: (userList) => {
        userList.forEach((userJoin) => {
          userJoin.setUserAvatar(user?.avatar);
        });
      },
      onLeaveRoom: () => {
        zp.destroy();
        router.push(`/chat?room=${router.query.id}`);
        window.location.reload();
      },
    });
  };

  return (
    <Box w={'full'} h={'100vh'} pt={isMobile && '250px'} ref={myMeeting}></Box>
  );
};

VideoCall.getLayout = function getLayout(page: ReactElement) {
  return (
    <React.Fragment>
      <ChatContextProvider>{page}</ChatContextProvider>
    </React.Fragment>
  );
};

export default VideoCall;
