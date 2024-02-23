import React from "react";
import {CheckboxProps} from "./Checkbox.types";
import s from './checkbox.module.css';

//TODO: need to add sizes and disabled state
export function Checkbox({
  label = '',
  size = 24,
  disabled = false,
  className = '',
  checked= false,
  name='',
  onChange=(e) => {}
}: CheckboxProps) {

  const classNames = [
    s.container,
    s[`size__${size}`],
    ...(disabled ? [s.disabled] : []),
    className,
  ].join(' ');

  return (
    <label className={classNames}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={s.checkmark} />
      <span className={s.text}>{label}</span>
    </label>
  )
}
