import React from 'react';
import { ToastContainer } from 'react-toastify';
import { CloseButton } from './components/CloseButton';
import 'react-toastify/dist/ReactToastify.css';
import s from './notification.module.css';

export function NotificationContainer() {
  return (
    <ToastContainer
      hideProgressBar
      newestOnTop
      draggable
      closeButton={CloseButton}
      className={s.container}
      toastClassName={s.toast}
      bodyClassName={s.body}
      theme={'colored'}
      closeOnClick={false}
      autoClose={false}
    />
  );
}
