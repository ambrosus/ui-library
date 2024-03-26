import React from 'react';
import { InlineLoaderProps } from './InlineLoader.types';
import s from './inline-loader.module.css';

export function InlineLoader({ className }: InlineLoaderProps) {
  return (
    <div className={`${s.loader} ${className}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
