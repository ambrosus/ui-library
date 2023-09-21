import React from 'react';
import s from './spinner.module.css';

export function Spinner({ className = '' }: any) {
  return <div className={`${s.spinner} ${className}`}></div>;
}
