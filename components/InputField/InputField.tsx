import React from 'react';
import { Box, FormLabel, Input } from '@chakra-ui/react';

type IInputFieldProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  validate?: any;
};

const InputField: React.FC<IInputFieldProps> = ({
  label,
  name,
  placeholder,
  type,
  validate,
}) => {
  return (
    <Box _focus={{ borderColor: 'none' }}>
      <FormLabel fontSize={'sm'}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        _placeholder={{ fontSize: 'sm' }}
        bg={'gray.100'}
        type={type}
        {...validate}
        rounded={'full'}
        name={name}
      />
    </Box>
  );
};

export default InputField;
