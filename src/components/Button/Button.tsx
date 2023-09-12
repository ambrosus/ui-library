import React from 'react';
import {ButtonProps} from "./Button.types";
import s from './button.module.css'
import propTypes from "prop-types";

export function Button({
  children,
  className,
  size,
  type,
  ...props
}: ButtonProps) {
  const classNames = [
    s.button,
    s[`button__${size}`],
    s[`button__${type}`],
    ...(className ? [className] : []),
  ];

  return (
    <button className={classNames.join(' ')} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  size: propTypes.oneOf(['small', 'medium', 'large']),
  type: propTypes.oneOf(['primary', 'secondary', 'tetiary', 'plain', 'destructive', 'gray']),
  onClick: propTypes.func,
}
