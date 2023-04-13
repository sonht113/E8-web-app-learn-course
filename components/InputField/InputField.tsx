import React from 'react';
import { Box, FormLabel, Input } from '@chakra-ui/react';

type IInputFieldProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  validate?: any;
  change?: (v: any) => void;
  value?: string;
};

const InputField: React.FC<IInputFieldProps> = ({
  label,
  name,
  placeholder,
  type,
  validate,
  change,
  value,
}) => {
  return (
    <Box _focus={{ borderColor: 'none' }}>
      <FormLabel fontSize={'sm'}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        _placeholder={{ fontSize: 'sm' }}
        bg={'gray.100'}
        type={type}
        value={value}
        {...validate}
        rounded={'full'}
        name={name}
        onChange={(e) => change(e.target.value)}
      />
    </Box>
  );
};

export default InputField;
