import React from "react";
import closeIcon from "../assets/close.svg";

export function CloseButton({ closeToast }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={closeToast}
    >
      <img src={closeIcon} alt="close"/>
    </button>
  )
}

interface CloseButtonProps {
  closeToast: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
