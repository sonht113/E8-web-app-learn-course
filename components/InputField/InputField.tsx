import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

type IInputFieldProps = {
  label?: string;
  placeholder?: string;
  type?: string;
};

const InputField: React.FC<IInputFieldProps> = ({
  label,
  placeholder,
  type,
}) => {
  return (
    <FormControl _focus={{ borderColor: 'none' }} mb={5}>
      <FormLabel fontSize={'sm'}>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        _placeholder={{ fontSize: 'sm' }}
        bg={'gray.100'}
        type={type}
        rounded={'full'}
      />
    </FormControl>
  );
};

export default InputField;
