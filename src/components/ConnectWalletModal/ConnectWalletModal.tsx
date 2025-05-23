import React from 'react';
import Modal from '../Modal_V2';
import { WalletList } from '../ConnectWallet';
import { ConnectWalletModalTypes } from './ConnectWalletModal.types';

import PropTypes from 'prop-types';

export function ConnectWalletModal({
  isOpen,
  onClose,
  connectors,
  promoConnectors,
  chainIdToConnect,
}: ConnectWalletModalTypes) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalRootId={'connect-wallet-modal'}
    >
      <WalletList
        onClose={onClose}
        connectors={connectors}
        promoConnectors={promoConnectors}
        chainIdToConnect={chainIdToConnect}
      />
    </Modal>
  );
}

ConnectWalletModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  connectors: PropTypes.array.isRequired,
  promoConnectors: PropTypes.array,
  chainIdToConnect: PropTypes.number,
};
