import React from 'react';
import { Button } from '@chakra-ui/react';

import { ButtonOptions } from '../../types/button.type';

interface IButtonProps extends ButtonOptions {
  title: string;
  float?: any;
  onClick?: () => void;
  cursor?: string;
  bgGradient?: string;
}

const ButtonFC: React.FC<IButtonProps> = ({
  title,
  color,
  variant,
  leftIcon,
  rightIcon,
  isActive,
  isDisabled,
  isLoading,
  type,
  spinner,
  spinnerPlacement,
  loadingText,
  radius,
  size,
  float,
  bgGradient,
  cursor,
  onClick,
}) => {
  return (
    <Button
      rounded={radius}
      colorScheme={color}
      variant={variant}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isActive={isActive}
      isDisabled={isDisabled}
      isLoading={isLoading}
      type={type}
      spinner={spinner}
      spinnerPlacement={spinnerPlacement}
      loadingText={loadingText}
      size={size}
      float={float}
      onClick={onClick}
      cursor={cursor}
      w={'full'}
      bgGradient={bgGradient}
    >
      {title}
    </Button>
  );
};

export default ButtonFC;
