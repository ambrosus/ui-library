import { ReactNode } from 'react';

export default interface BadgeProps {
  children?: ReactNode;
  leadIcon?: ReactNode;
  tailIcon?: ReactNode;
  className?: string;
  size: 'small' | 'medium' | 'large';
  type: 'neutral' | 'destructive' | 'warning' | 'success' | 'white';
}
