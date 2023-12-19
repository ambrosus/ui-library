import React from "react";
import { ButtonIconProps } from "./ButtonIcon.types"
import s from './button.module.css';
import propTypes from "prop-types";

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

ButtonIcon.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  size: propTypes.oneOf(['small', 'medium', 'large', 32, 40, 48]).isRequired,
  type: propTypes.oneOf(['primary', 'secondary', 'tetiary', 'plain', 'destructive', 'gray']).isRequired,
  onClick: propTypes.func,
  disabled: propTypes.bool,
  leadIcon: propTypes.node,
  tailIcon: propTypes.node,
}
