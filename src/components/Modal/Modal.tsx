import React from 'react';
import s from './Modal.module.css';
import { ModalProps } from './Modal.types';
import cross from './assets/cross.svg';
import PropTypes from 'prop-types';

export function Modal({ children, close, passRef }: ModalProps) {
  return (
    <div className={s.modal} ref={passRef}>
      {children}
      <button className={s.close} onClick={close}>
        <img src={cross} width='24' height='24' alt='close' />
      </button>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,
  passRef: PropTypes.any,
};
