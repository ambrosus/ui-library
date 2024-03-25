import React from 'react';
import s from './spinner.module.css';
import { SpinnerProps } from './Spinner.types';

export function Spinner({ className = '' }: SpinnerProps) {
  return <div className={`${s.spinner} ${className}`}></div>;
}
