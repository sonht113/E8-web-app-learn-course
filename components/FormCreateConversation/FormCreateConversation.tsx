import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCamera } from 'react-icons/ai';
import { ChatContext } from 'context/ChatContext';
import InputField from '../InputField';

type IFormCreateConversationProps = {
  onCloseModal: () => void;
};

const FormCreateConversation: React.FC<IFormCreateConversationProps> = ({
  onCloseModal,
}) => {
  const [imagePreview, setImagePreview] = useState<null | string>(null);
  const [errorValidateImage, setErrorValidateImage] = useState<string>('');

  const { avatarClassRoom, setAvatarClassRoom, createConversation } =
    useContext(ChatContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (data) => {
    if (!avatarClassRoom) {
      setErrorValidateImage('Vui lòng chọn ảnh đại diện cho lớp học');
      return;
    }
    createConversation(data.nameClass, () => {
      reset();
      onCloseModal();
    });
  };

  return (
    <Flex flexDirection={'column'} alignItems={'center'} pb={4}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Text fontSize={'sm'} color={'gray.500'}>
          <Text display={'inline'} fontSize={'sm'} color={'red'}>
            *
          </Text>
          Chọn ảnh đại diện
        </Text>
        {imagePreview ? (
          <Box position={'relative'} _hover={{ cursor: 'pointer' }}>
            <Avatar src={imagePreview} w={'100px'} h={'100px'} />
          </Box>
        ) : (
          <>
            <Box _hover={{ cursor: 'pointer' }} w={'100px'} h={'100px'}>
              <label
                htmlFor="avatarClass"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'gray',
                }}
              >
                <AiFillCamera fontSize={'30px'} color={'white'} />
              </label>
            </Box>
            <input
              type={'file'}
              accept="image/*"
              id="avatarClass"
              style={{ display: 'none' }}
              onChange={(e) => {
                setAvatarClassRoom(e.target.files);
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </>
        )}
        {errorValidateImage && (
          <Text fontSize={'xs'} color={'red'}>
            {errorValidateImage}
          </Text>
        )}
      </Box>
      <form onSubmit={handleSubmit(submit)} style={{ marginTop: '20px' }}>
        <Box h={'90px'} mb={5}>
          <InputField
            label={'*Tên lớp'}
            name={'nameClass'}
            type={'text'}
            placeholder={'Nhập tên lớp'}
            validate={{
              ...register('nameClass', {
                required: 'Vui lòng nhập tên lớp học',
              }),
            }}
            change={(value) => value}
          />
          {errors.nameClass && (
            <Text color={'red'} fontSize={'xs'} pl={2}>
              {String(errors.nameClass?.message)}
            </Text>
          )}
        </Box>
        <Flex justifyContent={'center'} w={'full'}>
          <Button
            type="submit"
            colorScheme={'teal'}
            size={'sm'}
            cursor={'pointer'}
          >
            Tạo
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default FormCreateConversation;
