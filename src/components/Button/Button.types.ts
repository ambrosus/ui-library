import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  size: 'small' | 'medium' | 'large' | 32 | 40 | 48;
  type: 'primary' | 'secondary' | 'tetiary' | 'plain' | 'destructive' | 'grey';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leadIcon?: ReactNode;
  tailIcon?: ReactNode;
  disabled?: boolean;
}
