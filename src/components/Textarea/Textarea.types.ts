import { ChangeEventHandler, JSX } from 'react';

export interface TextareaProps {
  className?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  leadIcon?: JSX.Element;
  tailIcon?: JSX.Element;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  error?: string | boolean;
  helperText?: string;
}

export interface BottomTextProps {
  helperText?: string;
  error?: string | boolean;
}
