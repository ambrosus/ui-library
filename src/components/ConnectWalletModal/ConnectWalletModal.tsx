import React, { useState } from 'react';
import Modal from '../Modal_V2';
import { WalletList } from '../ConnectWallet';

export function ConnectWalletModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Connect Wallet</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <WalletList closeModal={closeModal} />
      </Modal>
    </>
  );
}
