import React from 'react';
import { BottomTextProps, TextareaProps } from './Textarea.types';
import propTypes from 'prop-types';
import s from './textarea.module.css';

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
  helperText,
}: TextareaProps) {
  return (
    <div
      className={`${s.container} ${className || ''} ${disabled ? s.disabled : ''} ${error ? s.inputError : ''}`}
    >
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
      <span className={s.helperText}></span>
      <BottomText helperText={helperText} error={error} />
    </div>
  );
}

function BottomText({ helperText, error }: BottomTextProps) {
  if (error && typeof error === 'string') {
    return <span className={`${s.helperText} ${s.errorText}`}>{error}</span>;
  }
  if (helperText) {
    return <span className={s.helperText}>{helperText}</span>;
  }
  return null;
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
  error: propTypes.oneOfType([propTypes.string, propTypes.bool]),
};
