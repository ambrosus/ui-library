import {JSX, MouseEventHandler} from "react";

export interface ButtonProps {
  children?: any;
  className?: string;
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary' | 'tetiary' | 'plain' | 'destructive' | 'grey';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leadIcon?: JSX.Element;
  tailIcon?: JSX.Element;
  disabled?: boolean;
}
