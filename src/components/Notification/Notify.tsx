import React from "react";

import { Content } from './components/Content';
import {toast, ToastOptions} from "react-toastify";

import {ErrorIcon} from "./assets/error";
import {InfoIcon} from "./assets/info";
import {SuccessIcon} from "./assets/success";
import {WarningIcon} from "./assets/warning";
import {Spinner} from "../Spinner";

import s from './notification.module.css'

const notifyInfo = (message: React.ReactNode, description: React.ReactNode, options: ToastOptions) => {
  toast.info(
    <Content message={message} description={description}/>,
{
    icon: InfoIcon,
    className: `${s.border_info} ${s.toast}`,
    ...options
  });
}

const notifySuccess = (message: React.ReactNode, description: React.ReactNode, options: ToastOptions) => {
  toast.success(
    <Content message={message} description={description}/>, {
    icon: SuccessIcon,
    className: `${s.border_success} ${s.toast}`,
    ...options
  });
}

const notifyWarning = (message: React.ReactNode, description: React.ReactNode, options: ToastOptions) => {
  toast.warn(<Content message={message} description={description} />, {
    icon: WarningIcon,
    className: `${s.border_warning} ${s.toast}`,
    ...options
  });
}

const notifyError = (message: React.ReactNode, description: React.ReactNode, options: ToastOptions) => {
  toast.error(<Content message={message} description={description} />, {
    icon: ErrorIcon,
    className: `${s.border_error} ${s.toast}`,
    ...options
  });
}

const notifyLoading = (message: React.ReactNode, description: React.ReactNode, options: ToastOptions) => {
  toast(
    <Content message={message} description={description} />,
    {
    icon: Spinner,
    className: `${s.border} ${s.toast}`,
    ...options
  });
}

export const Notify = {
  ...toast,
  info: notifyInfo,
  success: notifySuccess,
  warn: notifyWarning,
  error: notifyError,
  loading: notifyLoading,
}
