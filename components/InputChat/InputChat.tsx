import React, { useState } from 'react';
import { Box, Input, Flex, Tooltip } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';
import { BsFillImageFill } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

type IInputChatProps = {
  isMobile?: boolean;
};

const InputChat: React.FC<IInputChatProps> = ({ isMobile }) => {
  const [message, setMessage] = useState('');

  return (
    <Box
      h={'60px'}
      w={'full'}
      position={isMobile ? 'fixed' : 'absolute'}
      bottom={0}
      left={0}
      px={5}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      borderTop={'1px'}
      borderTopColor={'gray.300'}
      bg={'white'}
    >
      <Input
        placeholder="Enter the messages"
        w={['50%', '70%', '80%']}
        _focus={{ border: '0px' }}
        border={'1px'}
        borderColor={'gray.200'}
        rounded={'full'}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Flex w={['50%', '30%', '20%']} gap={5} justifyContent={'flex-end'}>
        <input type="file" style={{ display: 'none' }} id="file" />
        <Tooltip label={'Đính kèm tệp'} hasArrow placement="top-start">
          <label htmlFor="file">
            <AttachmentIcon
              cursor={'pointer'}
              fontSize={'25px'}
              color={'gray'}
            />
          </label>
        </Tooltip>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="image"
          multiple
        />
        <Tooltip label={'Đính kèm ảnh'} hasArrow placement="top-end">
          <label htmlFor="image">
            <BsFillImageFill
              cursor={'pointer'}
              fontSize={'25px'}
              color={'gray'}
            />
          </label>
        </Tooltip>
        <label>
          <FiSend
            fontSize={'25px'}
            cursor={message ? 'pointer' : 'not-allowed'}
            color={message ? 'green' : 'gray'}
          />
        </label>
      </Flex>
    </Box>
  );
};

export default InputChat;
