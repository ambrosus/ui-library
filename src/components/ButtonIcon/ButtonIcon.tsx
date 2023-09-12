import React from "react";
import { ButtonIconProps } from "./ButtonIcon.types"
import s from './button.module.css';

export function ButtonIcon({
  children,
  className,
  size,
  type,
  ...props
}: ButtonIconProps) {

  const classNames = [
    s['button-icon'],
    s[`button-icon__${size}`],
    s[`button-icon__${type}`],
    className || '',
  ];

  return (
    <button className={classNames.join(' ')} {...props}>
      {children}
    </button>
  );
}
