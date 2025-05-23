import React, { useCallback, useEffect, useState } from 'react';
import { ConnectWalletModalContext } from './context';
import { ConnectWalletModal } from '../../components';
import { useFilteredConnectors } from '../../hooks';

export function ConnectWalletModalProvider({
  children,
}: ConnectWalletModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Allow to pass chainId to connect to in modal
  const [chainIdToConnect, setChainIdToConnect] = useState<number | undefined>(
    undefined,
  );

  // But clear it when modal is closed
  useEffect(() => {
    if (isOpen === false) setChainIdToConnect(undefined);
  }, [isOpen]);

  const toggleModal = useCallback(
    function toggleModal(chainId?: number) {
      setIsOpen((prev) => !prev);
      if (chainId && typeof chainId === 'number') {
        setChainIdToConnect(chainId);
      }
    },
    [setIsOpen],
  );

  const { filteredConnectors, mockedConnectors } = useFilteredConnectors();

  return (
    <ConnectWalletModalContext.Provider value={{ isOpen, toggleModal }}>
      {children}
      <ConnectWalletModal
        onClose={toggleModal}
        connectors={filteredConnectors}
        promoConnectors={mockedConnectors}
        isOpen={isOpen}
        chainIdToConnect={chainIdToConnect}
      />
    </ConnectWalletModalContext.Provider>
  );
}

interface ConnectWalletModalProviderProps {
  children: React.ReactNode;
}
