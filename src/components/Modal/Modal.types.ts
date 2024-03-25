import React from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  close?: (...props: [any]) => void;
  passRef?: React.RefObject<HTMLDivElement>;
}
