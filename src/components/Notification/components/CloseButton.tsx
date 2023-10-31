import React from "react";
import closeIcon from "../assets/close.svg";
import s from '../notification.module.css'


export function CloseButton({ closeToast }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={closeToast}
      className={s.closeButton}
    >
      <img src={closeIcon} alt="close"/>
    </button>
  )
}

interface CloseButtonProps {
  closeToast: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
