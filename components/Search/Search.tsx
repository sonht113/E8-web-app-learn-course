/* eslint-disable @typescript-eslint/ban-types */
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ResponsiveValue,
} from '@chakra-ui/react';
import React from 'react';

type ISearchProps = {
  placeholder?: string;

  /**
   * xs (24px)
   * sm (32px)
   * md (40px)
   * lg (48px)
   */
  sizeInput?: ResponsiveValue<(string & {}) | 'sm' | 'md' | 'lg' | 'xs'>;

  width?: ResponsiveValue<
    number | 'px' | (string & {}) | 'unset' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  >;

  /**
   * @value "outline" || "filled" || "flushed" || "unstyled"
   */
  variant?: string;

  type?: string;
  sizeIcon?: string;
  colorFocusBorder?: string;
  colorIcon?: string;
  radius?: string;
  display?: any;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<ISearchProps> = ({
  placeholder,
  sizeInput,
  sizeIcon,
  width,
  variant,
  type,
  colorFocusBorder,
  colorIcon,
  radius,
  display,
  value,
  setValue,
}) => {
  return (
    <InputGroup display={display} width={width}>
      <InputLeftElement
        children={<SearchIcon fontSize={sizeIcon} color={colorIcon} />}
      />
      <Input
        rounded={radius}
        type={type}
        size={sizeInput}
        variant={variant}
        placeholder={placeholder}
        focusBorderColor={colorFocusBorder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        _placeholder={{ fontSize: 'sm' }}
      />
      {value && (
        <InputRightElement
          children={
            <CloseIcon
              fontSize={'xs'}
              color={colorIcon}
              cursor="pointer"
              onClick={() => setValue('')}
            />
          }
        />
      )}
    </InputGroup>
  );
};

export default Search;
