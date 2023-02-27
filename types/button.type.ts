/* eslint-disable @typescript-eslint/ban-types */
import { ResponsiveValue, SystemProps } from '@chakra-ui/react';
import React from 'react';

export interface ButtonOptions {
  /**
   * @values "solid" || "outline"
   */
  variant?: string;
  /**
   * @values "teal" || "red" || "gray" || "orange" || "yellow" || "green" || "blue" || "cyan" || "purple" || "pink"
   */
  color?: string;
  /**
   * If `true`, the button will show a spinner.
   * @default false
   */
  isLoading?: boolean;
  /**
   * If `true`, the button will be styled in its active state.
   * @default false
   */
  isActive?: boolean;
  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * The label to show in the button when `isLoading` is true
   * If no text is passed, it only shows the spinner
   */
  loadingText?: string;
  /**
   * The html button type to use.
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * If added, the button will show an icon before the button's label.
   * @type React.ReactElement
   */
  leftIcon?: React.ReactElement;
  /**
   * If added, the button will show an icon after the button's label.
   * @type React.ReactElement
   */
  rightIcon?: React.ReactElement;
  /**
   * The space between the button icon and label.
   * @type SystemProps["marginRight"]
   */
  iconSpacing?: SystemProps['marginRight'];
  /**
   * Replace the spinner component when `isLoading` is set to `true`
   * @type React.ReactElement
   */
  spinner?: React.ReactElement;
  /**
   * It determines the placement of the spinner when isLoading is true
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end';

  radius?: ResponsiveValue<
    | number
    | 'base'
    | (string & {})
    | '-moz-initial'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | 'none'
    | '3xl'
    | 'full'
  >;

  size?: ResponsiveValue<'sm' | (string & {}) | 'md' | 'lg' | 'xs'>;
}
