import React, { useCallback, useState } from 'react';
import { ConnectWalletModalContext } from './context';
import { ConnectWalletModal } from '../../components';
import { useFilteredConnectors } from '../../hooks';

export function ConnectWalletModalProvider({
  children,
}: ConnectWalletModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const connectors = useFilteredConnectors();

  return (
    <ConnectWalletModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
      <ConnectWalletModal
        onClose={toggleModal}
        connectors={connectors}
        isOpen={isOpen}
      />
    </ConnectWalletModalContext.Provider>
  );
}

interface ConnectWalletModalProviderProps {
  children: React.ReactNode;
}
