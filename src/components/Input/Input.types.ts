import {ChangeEventHandler, JSX} from "react";

export interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  label?: string;
  leadIcon?: JSX.Element | string;
  tailIcon?: JSX.Element | string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string | boolean;
}
