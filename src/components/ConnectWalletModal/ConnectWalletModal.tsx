
import React from "react";
import useClickOutside from '../../hooks/useClickOutside';
import { useRef } from 'react';
import { Modal } from "../Modal";
import {ConnectWalletModalProps} from "./ConnectWalletModal.types";

import {ConnectWallet} from "../ConnectWallet";

export function ConnectWalletModal ({
  close,
  loginMetamask,
  loginWalletConnect,
  isOpen,
}: ConnectWalletModalProps) {
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  return (
    <Modal close={close} passRef={ref}>
      <ConnectWallet {...{ loginMetamask, loginWalletConnect }} />
    </Modal>
  );
}
