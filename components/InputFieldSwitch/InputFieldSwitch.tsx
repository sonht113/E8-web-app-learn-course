import React, { ReactElement, useState } from 'react';
import {
  FormControl,
  Flex,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
  Text,
  Box,
} from '@chakra-ui/react';
import InputField from '../InputField/InputField';
import { useRouter } from 'next/router';

type PropertiesType = {
  label?: string;
  labelAction?: string;
  placeholder?: string;
  type?: string;
  icon?: ReactElement;
};

type IInputFieldSwitchProps = {
  defaultInput: PropertiesType;
  switchInput: PropertiesType;
};

const InputFieldSwitch: React.FC<IInputFieldSwitchProps> = ({
  defaultInput,
  switchInput,
}) => {
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const router = useRouter();
  return (
    <FormControl my={8}>
      <Flex justifyContent={'space-between'}>
        <FormLabel fontSize={'sm'}>
          {isSwitch ? defaultInput.label : switchInput.label}
        </FormLabel>
        <FormLabel
          cursor={'pointer'}
          fontSize={'sm'}
          onClick={() => setIsSwitch(!isSwitch)}
        >
          {!isSwitch ? defaultInput.labelAction : switchInput.labelAction}
        </FormLabel>
      </Flex>
      <InputGroup rounded={'full'}>
        {defaultInput.icon && isSwitch && (
          <InputLeftElement pointerEvents="none" children={defaultInput.icon} />
        )}
        {switchInput.icon && !isSwitch && (
          <InputLeftElement pointerEvents="none" children={switchInput.icon} />
        )}
        <Input
          placeholder={
            isSwitch ? defaultInput.placeholder : switchInput.placeholder
          }
          _placeholder={{ fontSize: 'sm' }}
          bg={'gray.100'}
          rounded={'full'}
          type={!switchInput ? defaultInput.type : switchInput.type}
        />
      </InputGroup>
      <InputGroup display={'flex'} flexDirection={'column'}>
        <Box>
          {!isSwitch && <InputField type="password" placeholder="Mật khẩu" />}
        </Box>
        {!isSwitch && router.pathname === '/register' && (
          <Text fontSize={'xs'} color={'gray.600'} pl={3}>
            Gợi ý: Mật khẩu cần có ít nhất 8 kí tự
          </Text>
        )}
      </InputGroup>
    </FormControl>
  );
};

export default InputFieldSwitch;
