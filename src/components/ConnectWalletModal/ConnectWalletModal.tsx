import React from 'react';
import Modal from '../Modal_V2';
import { WalletList } from '../ConnectWallet';
import { ConnectWalletModalTypes } from './ConnectWalletModal.types';

export function ConnectWalletModal({
  isOpen,
  onClose,
}: ConnectWalletModalTypes) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <WalletList onClose={onClose} />
    </Modal>
  );
}
