import React, { useEffect, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './Modal.types';
import styles from './Modal.module.css';
import Close from './assets/close-icon.svg';

const Modal = ({
  children,
  onClose,
  isOpen,
  modalRootId = 'modal-root',
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const modalRoot = useMemo(() => {
    if (typeof document === 'undefined') return;

    const root = document.getElementById(modalRootId);

    if (!root) {
      const modalRoot = document.createElement('div');
      modalRoot.id = modalRootId;
      document.body.appendChild(modalRoot);
      return modalRoot;
    }

    return root;
  }, [modalRootId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} role='dialog' aria-modal='true'>
      <div className={styles.content} ref={modalRef}>
        <span className={styles.close} onClick={onClose}>
          <img src={Close} alt='close icon' />
        </span>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
