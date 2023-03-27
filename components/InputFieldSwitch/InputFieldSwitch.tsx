/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react';
import {
  Flex,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
  Text,
  Box,
} from '@chakra-ui/react';

type PropertiesType = {
  label?: string;
  name?: string;
  labelAction?: string;
  placeholder?: string;
  type?: string;
  icon?: ReactElement;
};

type IInputFieldSwitchProps = {
  defaultInput: PropertiesType;
  switchInput: PropertiesType;
  validate?: any;
  errors?: any;
  reset?: any;
  isSwitch: boolean;
  setIsSwitch: (_v: boolean) => void;
};

const InputFieldSwitch: React.FC<IInputFieldSwitchProps> = ({
  defaultInput,
  switchInput,
  validate,
  errors,
  reset,
  isSwitch,
  setIsSwitch,
}) => {
  return (
    <Box my={10}>
      <Flex justifyContent={'space-between'}>
        <FormLabel fontSize={'sm'}>
          {isSwitch ? defaultInput.label : switchInput.label}
        </FormLabel>
        <FormLabel
          cursor={'pointer'}
          fontSize={'sm'}
          onClick={() => {
            reset();
            setIsSwitch(!isSwitch);
          }}
        >
          {!isSwitch ? defaultInput.labelAction : switchInput.labelAction}
        </FormLabel>
      </Flex>
      <Box h={'70px'}>
        <InputGroup rounded={'full'}>
          {defaultInput.icon && isSwitch && (
            <InputLeftElement children={defaultInput.icon} />
          )}
          {switchInput.icon && !isSwitch && (
            <InputLeftElement children={switchInput.icon} />
          )}
          {!isSwitch && (
            <Input
              placeholder={switchInput.placeholder}
              _placeholder={{ fontSize: 'sm' }}
              onChange={(e) => console.log(e.target.value)}
              bg={'gray.100'}
              rounded={'full'}
              type={switchInput.type}
              name={switchInput.name}
              {...validate(switchInput.name, {
                required: 'Vui lòng nhập email',
                pattern: {
                  value: /[^\s]*@[a-z0-9.-]*/i,
                  message: 'Email không hợp lệ',
                },
              })}
            />
          )}
          {isSwitch && (
            <Input
              placeholder={defaultInput.placeholder}
              _placeholder={{ fontSize: 'sm' }}
              bg={'gray.100'}
              rounded={'full'}
              type={defaultInput.type}
              name={defaultInput.name}
              {...validate(defaultInput.name, {
                required: 'Vui lòng nhập số điện thoại',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Số điện thoại không hợp lệ',
                },
                minLength: {
                  value: 10,
                  message: 'Số điện thoại không hợp lệ',
                },
                maxLength: {
                  value: 10,
                  message: 'Số điện thoại không hợp lệ',
                },
              })}
            />
          )}
        </InputGroup>
        {errors.email && !isSwitch && (
          <Text fontSize="xs" px={2} color={'red'}>
            {errors.email?.message}
          </Text>
        )}
        {errors.phone && isSwitch && (
          <Text fontSize="xs" px={2} color={'red'}>
            {errors.phone?.message}
          </Text>
        )}
      </Box>
      <InputGroup display={'flex'} flexDirection={'column'} h={'70px'}>
        <Box _focus={{ borderColor: 'none' }}>
          <FormLabel fontSize={'sm'}>Mật khẩu</FormLabel>
          <Input
            placeholder={'Mật khẩu'}
            _placeholder={{ fontSize: 'sm' }}
            bg={'gray.100'}
            type={'password'}
            rounded={'full'}
            name={'password'}
            {...validate('password', {
              required: 'Vui lòng nhập mật khẩu',
              minLength: {
                value: 8,
                message: 'Mật khẩu không hợp lệ',
              },
            })}
          />
        </Box>
        {errors.password && (
          <Text fontSize="xs" px={2} color={'red'}>
            {errors.password?.message}
          </Text>
        )}
        <Text fontSize={'xs'} color={'gray.600'} pl={2}>
          Gợi ý: Mật khẩu cần có ít nhất 8 kí tự
        </Text>
      </InputGroup>
    </Box>
  );
};

export default InputFieldSwitch;
