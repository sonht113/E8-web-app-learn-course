import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Image,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import EnterFormImg from '../../public/static/images/enter-form.webp';

type FormValues = {
  stk: string;
  owner: string;
  bankName: string;
  email: string;
  phone: number;
};

const FormInforUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
      gap={4}
      width={{ base: '100%', md: '100%' }}
      margin="0 auto"
      paddingX={0}
    >
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Flex
          alignItems="center"
          width="100%"
          height="100%"
          px={8}
          justifyContent="center"
        >
          <Box boxSize="sm">
            <Image src={EnterFormImg.src} alt="Enter form" />
          </Box>
        </Flex>
      </GridItem>

      <GridItem colSpan={{ base: 1, md: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.stk}>
            <FormLabel htmlFor="stk">STK Ngân hàng</FormLabel>
            <Input
              id="stk"
              type="string"
              placeholder="Vui lòng nhập số tài khoản ngân hàng"
              {...register('stk', { required: 'Bạn phải nhập ô này' })}
            />
            <FormErrorMessage>{errors.stk?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.owner} mt={4}>
            <FormLabel htmlFor="owner">Tên chủ tài khoản</FormLabel>
            <Input
              id="owner"
              type="string"
              placeholder="Vui lòng nhập tên chủ tài khoản"
              {...register('owner', {
                required: 'Bạn phải nhập ô này',
              })}
            />
            <FormErrorMessage>{errors.owner?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.bankName} mt={4}>
            <FormLabel htmlFor="bankName">Chi nhánh ngân hàng</FormLabel>
            <Input
              id="bankName"
              type="string"
              placeholder="Vui lòng nhập chi nhánh ngân hàng"
              {...register('bankName', {
                required: 'Bạn phải nhập ô này',
              })}
            />
            <FormErrorMessage>{errors.bankName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email} mt={4}>
            <FormLabel htmlFor="email">Địa chỉ email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Vui lòng nhập email"
              {...register('email', { required: 'Bạn phải nhập ô này' })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.phone} mt={4}>
            <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
            <Input
              id="phone"
              type="number"
              placeholder="Vui lòng nhập số điện thoại"
              {...register('phone', {
                required: 'Bạn phải nhập ô này',
              })}
            />
            <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
          </FormControl>

          <Button
            bgColor="green"
            type="submit"
            mt={4}
            width="100%"
            _hover={{
              bgColor: 'transparent',
              borderWidth: '2px',
              borderColor: 'green',
            }}
          >
            Submit
          </Button>
        </form>
      </GridItem>
    </Grid>
  );
};

export default FormInforUser;
