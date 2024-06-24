import React from 'react';
import useClickOutside from '../../hooks/useClickOutside';
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
  isOpen,
}: ConnectWalletModalProps) {
  const ref = useRef(null);
  useClickOutside(ref, close, isOpen);

  return (
    <Modal close={close} passRef={ref}>
      <ConnectWallet {...{ loginMetamask, loginWalletConnect, loginSafepal }} />
    </Modal>
  );
}

ConnectWalletModal.propTypes = {
  close: PropTypes.func,
  loginMetamask: PropTypes.func,
  loginWalletConnect: PropTypes.func,
  isOpen: PropTypes.bool,
};
