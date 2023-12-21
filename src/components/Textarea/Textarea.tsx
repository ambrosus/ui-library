import React from 'react';
import { TextareaProps } from "./Textarea.types";
import propTypes from "prop-types";
import s from "./textarea.module.css";

export function Textarea({
  className,
  label,
  leadIcon,
  tailIcon,
  value,
  placeholder,
  onChange,
  disabled,
  error,
}: TextareaProps) {
  return (
    <div className={`${s.container} ${className || ''} ${disabled ? s.disabled : ''} ${error ? s.inputError : ''}`}>
      {label && <span className={s.label}>{label}</span>}
      <div className={s.field}>
        {leadIcon || null}
        <textarea
          className={s.textarea}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {tailIcon || null}
      </div>
      {
        typeof error === 'string' && error &&
        (<span className={s.error}>{error}</span>)
      }
    </div>
  )
}

Textarea.propTypes = {
  className: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string,
  label: propTypes.string,
  leadIcon: propTypes.node,
  tailIcon: propTypes.node,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  error: propTypes.oneOfType([
    propTypes.string,
    propTypes.bool,
  ]),
}
