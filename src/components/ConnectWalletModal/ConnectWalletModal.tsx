import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useRef } from 'react';
import { Modal } from '../Modal';
import { ConnectWalletModalProps } from './ConnectWalletModal.types';

import { ConnectWallet } from '../ConnectWallet';
import PropTypes from 'prop-types';

export function ConnectWalletModal({
  close,
  loginMetamask,
  loginWalletConnect,
  loginSafepal,
  loginBitget,
  isOpen,
}: ConnectWalletModalProps) {
  const ref = useRef(null);

  const clickOutsideHandler = () => {
    if (!isOpen) return;
    close();
  };

  useOnClickOutside(ref, clickOutsideHandler);

  return (
    <Modal close={close} passRef={ref}>
      <ConnectWallet {...{ loginMetamask, loginWalletConnect, loginSafepal, loginBitget }} />
    </Modal>
  );
}

ConnectWalletModal.propTypes = {
  close: PropTypes.func,
  loginMetamask: PropTypes.func,
  loginWalletConnect: PropTypes.func,
  loginSafepal: PropTypes.func,
  loginBitget: PropTypes.func,
  isOpen: PropTypes.bool,
};
