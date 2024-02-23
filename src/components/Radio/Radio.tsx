import React from "react";
import {RadioProps} from "./Radio.types";
import s from './radio.module.css';

//TODO: need to add sizes and disabled state
export function Radio({
  label = '',
  size = 24,
  disabled = false,
  className = '',
  value='',
  name='',
  onChange=(e) => {}
}: RadioProps) {

  const classNames = [
    s.container,
    s[`size__${size}`],
    ...(disabled ? [s.disabled] : []),
    className,
  ].join(' ');

  return (
    <label className={classNames}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={s.checkmark} />
      <span className={s.text}>{label}</span>
    </label>
  )
}
