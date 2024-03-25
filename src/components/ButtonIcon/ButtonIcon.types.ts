import { MouseEventHandler } from 'react';

export interface ButtonIconProps {
  children?: any;
  className?: string;
  disabled?: boolean;
  size: 'small' | 'medium' | 'large' | 32 | 40 | 48;
  type: 'primary' | 'secondary' | 'tetiary' | 'plain' | 'destructive' | 'grey';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
