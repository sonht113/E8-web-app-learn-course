import { AddIcon, CheckIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import React, { Dispatch, memo, SetStateAction } from 'react';
import { Conversation, ConversationUpdate } from 'types/converation.type';
import { UserPaginate } from 'types/user-paginate.type';

import InputField from '../InputField';

type IFormAddStudentJoinClassProps = {
  value: string;
  setValue?: Dispatch<SetStateAction<string>>;
  isLoading?: boolean;
  data?: UserPaginate;
  handleAddStudent: (body: { id: string; data: ConversationUpdate }) => void;
  conversation: Conversation;
};

const FormAddStudentJoinClass: React.FC<IFormAddStudentJoinClassProps> = ({
  value,
  setValue,
  isLoading,
  data,
  handleAddStudent,
  conversation,
}) => {
  return (
    <Box pb={10}>
      <InputField
        label="Email or phone"
        placeholder="Nhập vào email hoặc số điện thoại"
        change={(v: any) => setValue(v)}
        value={value}
      />
      {isLoading && (
        <Center mt={5} fontSize={'sm'} fontWeight={'medium'}>
          Loading...
        </Center>
      )}
      {data && data?.totalResults !== 1 && (
        <Center mt={5} fontSize={'sm'} fontWeight={'medium'}>
          Không có kết quả
        </Center>
      )}
      {data && data?.totalResults === 1 && (
        <Flex
          mt={5}
          border={'1px'}
          borderColor={'gray.300'}
          p={2}
          rounded={'lg'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Flex alignItems={'center'} gap={2}>
            <Avatar size={'md'} src={data?.results[0].avatar} />
            <Text fontSize={'md'} fontWeight={'medium'}>
              {data?.results[0].fullName}
            </Text>
          </Flex>
          {conversation?.users.findIndex(
            (item) => item === data?.results[0]._id
          ) > -1 ? (
            <CheckIcon color={'green'} />
          ) : (
            <Button
              size={'sm'}
              color={'white'}
              colorScheme={'teal'}
              onClick={() =>
                handleAddStudent({
                  id: conversation?._id,
                  data: {
                    avatar: conversation?.avatar,
                    isGroup: conversation?.isGroup,
                    chatName: conversation?.chatName,
                    users: [...conversation.users, data?.results[0]._id],
                  },
                })
              }
            >
              <AddIcon />
            </Button>
          )}
        </Flex>
      )}
    </Box>
  );
};

export default memo(FormAddStudentJoinClass);
