import React, { useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { BsCamera } from 'react-icons/bs';

type ISectionInfoUserSetting = {
  title: string;
  desc?: string;
  value?: string;
  click?: () => void;
  isEdit?: boolean;
  userName?: string;
};

const SectionInfoUserSetting: React.FC<ISectionInfoUserSetting> = ({
  title,
  desc,
  value,
  click,
  isEdit,
  userName,
}) => {
  const [isShowEdit, setIsShowEdit] = useState<boolean>(false);

  const isSectionForAvatar = useMemo(() => {
    return title === 'Avatar';
  }, [title]);

  return (
    <Flex
      w={'full'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      gap={5}
      mb={'60px'}
    >
      <Box
        w={['full', '70%']}
        display={isSectionForAvatar && 'flex'}
        alignItems={'center'}
        gap={[2, 5]}
      >
        <Box>
          <Heading fontSize={'md'} color={'gray.500'}>
            {title}
          </Heading>
          {!isSectionForAvatar && (
            <Input
              variant={'flushed'}
              fontSize={'sm'}
              fontWeight={'medium'}
              color={!isShowEdit ? 'black' : 'gray.500'}
              value={value}
              focusBorderColor={'gray.100'}
              mb={4}
              disabled={!isShowEdit}
            />
          )}
          <Text fontSize={'sm'} color={'gray.500'}>
            {desc}
          </Text>
        </Box>
        {isSectionForAvatar && (
          <Box position={'relative'} cursor={'pointer'}>
            <Avatar
              size={'lg'}
              name={userName
                ?.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D')}
              src={value}
            />
            <label
              htmlFor="avatarSetting"
              className={`hidden ${isShowEdit && 'visiable'}`}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <BsCamera
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translateX(-50%) translateY(-50%)',
                }}
                fontSize={'30px'}
                cursor={'pointer'}
                color={'black'}
              />
            </label>
            {/* <label
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <Spinner
                position={'absolute'}
                color={'#0dda7a'}
                style={{
                  top: '50%',
                  left: '50%',
                  translate: '-50% -50%',
                }}
              />
            </label> */}
            <input
              id="avatarSetting"
              style={{ display: 'none' }}
              type={'file'}
              accept={'image/*'}
            />
          </Box>
        )}
      </Box>
      {isEdit && !isShowEdit && (
        <Button
          variant={'outline'}
          rounded={'full'}
          fontSize={'xs'}
          color={'gray.500'}
          onClick={() => {
            setIsShowEdit(true);
          }}
        >
          Chỉnh sửa
        </Button>
      )}
      {isEdit && isShowEdit && (
        <Flex gap={5}>
          <Button
            variant={'outline'}
            rounded={'full'}
            fontSize={'xs'}
            color={'#02914e'}
            borderColor={'#02914e'}
          >
            Lưu
          </Button>
          <Button
            variant={'outline'}
            rounded={'full'}
            fontSize={'xs'}
            color={'gray.500'}
            onClick={() => setIsShowEdit(false)}
          >
            Huỷ
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default React.memo(SectionInfoUserSetting);
