import React from 'react';
import Modal from '../Modal_V2';
import { WalletList } from '../ConnectWallet';
import { ConnectWalletModalTypes } from './ConnectWalletModal.types';

import PropTypes from 'prop-types';

export function ConnectWalletModal({
  isOpen,
  onClose,
  connectors,
}: ConnectWalletModalTypes) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WalletList onClose={onClose} connectors={connectors} />
    </Modal>
  );
}

ConnectWalletModal.propTypes = {
  close: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  connectors: PropTypes.array.isRequired
};
