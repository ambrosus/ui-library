import {JSX} from "react";

export default interface BadgeProps {
  children?: any;
  leadIcon?: JSX.Element;
  tailIcon?: JSX.Element;
  className?: string;
  size: 'small' | 'medium' | 'large'
  type: 'neutral' | 'destructive' | 'warning' | 'success' | 'white';
}
