import React from 'react';

export type MenuItemType = {
  id: number;
  name: string;
  link?: string;
  icon?: React.ReactElement;
  subMenu?: SubMenuItem[];
};

export type SubMenuItem = {
  id: number;
  name: string;
  link: string;
};
