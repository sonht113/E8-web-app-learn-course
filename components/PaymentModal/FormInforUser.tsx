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
import { useRouter } from 'next/router';
import { createTransaction } from 'api/transaction.api';
import { AuthenContext } from 'context/AuthenContext';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import EnterFormImg from '../../public/static/images/enter-form.webp';
import { useMutation } from '@tanstack/react-query';
import { TransactionBody } from 'types/transaction.type';
import useToastify from 'hook/useToastify';
import Link from 'next/link';

type FormValues = {
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankBranch: string;
  email: string;
  phone: number;
};

const FormInforUser = () => {
  const router = useRouter();
  const toast = useToastify();

  const DURATION_TOAST = 3000;

  const createTransactionMutate = useMutation({
    mutationFn: (body: Partial<TransactionBody>) => createTransaction(body),
  });

  const { type, idCourse } = router.query;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const { user } = useContext(AuthenContext);

  const onSubmit = async (data: FormValues) => {
    const transactionBody = {
      ...data,
      idUser: user?._id,
      type: type,
      ...(idCourse ? { idCourse: idCourse } : ''),
    };

    createTransactionMutate.mutate(transactionBody, {
      onSuccess: () => {
        toast.handleOpenToastify(
          'success',
          'Thanh toán thành công',
          DURATION_TOAST
        );
        router.push('/');
      },
      onError: (error: any) => {
        toast.handleOpenToastify(
          'error',
          'Thanh toán thất bại',
          DURATION_TOAST
        );
        console.log(error);
      },
    });
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
          <FormControl isInvalid={!!errors.accountNumber}>
            <FormLabel htmlFor="accountNumber">STK Ngân hàng</FormLabel>
            <Input
              id="accountNumber"
              type="number"
              placeholder="Vui lòng nhập số tài khoản ngân hàng"
              {...register('accountNumber', {
                required: 'Bạn phải nhập ô này',
              })}
            />
            <FormErrorMessage>{errors.accountNumber?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.accountName} mt={4}>
            <FormLabel htmlFor="accountName">Tên chủ tài khoản</FormLabel>
            <Input
              id="accountName"
              type="string"
              placeholder="Vui lòng nhập tên chủ tài khoản"
              {...register('accountName', {
                required: 'Bạn phải nhập ô này',
              })}
            />
            <FormErrorMessage>{errors.accountName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.bankName} mt={4}>
            <FormLabel htmlFor="bankName">Tên ngân hàng</FormLabel>
            <Input
              id="bankName"
              type="string"
              placeholder="Vui lòng nhập tên ngân hàng"
              {...register('bankName', {
                required: 'Bạn phải nhập ô này',
              })}
            />
            <FormErrorMessage>{errors.bankName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.bankBranch} mt={4}>
            <FormLabel htmlFor="bankBranch">Chi nhánh ngân hàng</FormLabel>
            <Input
              id="bankBranch"
              type="string"
              placeholder="Vui lòng nhập chi nhánh ngân hàng"
              {...register('bankBranch', {
                required: 'Bạn phải nhập ô này',
              })}
            />
            <FormErrorMessage>{errors.bankBranch?.message}</FormErrorMessage>
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
