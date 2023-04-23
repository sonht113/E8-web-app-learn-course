import { Avatar, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { TeacherViewHome } from 'types/teacher.type';

type ITeacherProps = TeacherViewHome;

const Teacher: React.FC<ITeacherProps> = ({
  idUserDetail,
  profilePicture,
  phone,
  email,
  fullName,
}) => {
  return (
    <Link href={`/profile/${idUserDetail}`}>
      <Box
        w={['30vw', '30vw', 'full', 'full']}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        mb={2}
        cursor={'pointer'}
        _hover={{ bg: 'gray.100', rounded: 'xl', transition: 'linear 0.2s' }}
        py={2}
      >
        <Avatar
          size={['lg', 'xl']}
          src={profilePicture}
          name={fullName
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')}
          mb={2}
        />
        <Text
          fontSize={['md', 'lg']}
          fontWeight={'medium'}
          color={'#3e3e3e'}
          w={['full', 'full', '180px']}
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
        >
          {fullName}
        </Text>
        <Text
          fontSize={['sm', 'md']}
          color={'#3e3e3e'}
          w={['full', 'full', '180px']}
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
        >
          {email}
        </Text>
        <Text
          fontSize={['sm', 'md']}
          color={'#3e3e3e'}
          w={['full', 'full', '180px']}
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
        >
          {phone}
        </Text>
      </Box>
    </Link>
  );
};

export default Teacher;
