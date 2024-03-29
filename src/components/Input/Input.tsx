import React from 'react';
import { InputProps } from './Input.types';
import propTypes from 'prop-types';
import s from './input.module.css';

export function Input({
  className,
  label,
  leadIcon,
  tailIcon,
  type,
  value,
  placeholder,
  onChange,
  disabled,
  error,
}: InputProps) {
  return (
    <div
      className={`${s.container} ${className || ''} ${disabled ? s.disabled : ''} ${error ? s.inputError : ''}`}
    >
      {label && <span className={s.label}>{label}</span>}
      <div className={s.field}>
        {leadIcon || null}
        <input
          className={s.input}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {tailIcon || null}
      </div>
      {typeof error === 'string' && error && (
        <span className={s.error}>{error}</span>
      )}
    </div>
  );
}

Input.propTypes = {
  className: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  label: propTypes.string,
  leadIcon: propTypes.node,
  tailIcon: propTypes.node,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  error: propTypes.oneOfType([propTypes.string, propTypes.bool]),
};
