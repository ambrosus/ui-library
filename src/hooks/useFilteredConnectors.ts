import { useMemo } from 'react';
import { Connector, useConnect } from 'wagmi';
import useIsMobilePlatform from './useIsMobilePlatform';
import { CONNECTOR_NAME } from '../constants';

function findAndFilterConnectors(
  connectors: readonly Connector[],
  searchParams: { name: string }[],
) {
  const filteredConnectors: Connector[] = [];

  searchParams.forEach((searchParam) => {
    const matchingConnectors = connectors.filter((connector) =>
      connector.name.includes(searchParam.name),
    );

    const connector =
      matchingConnectors.find((c) => !c.predefined) || matchingConnectors[0];

    if (connector) {
      filteredConnectors.push(connector);
    }
  });

  return filteredConnectors;
}

export function useFilteredConnectors() {
  const { connectors } = useConnect();
  const { isMobile } = useIsMobilePlatform();

  return useMemo(() => {
    const searchParams = [
      { name: CONNECTOR_NAME.MetaMask },
      { name: CONNECTOR_NAME.Bitget },
      { name: CONNECTOR_NAME.GateWallet },
      { name: CONNECTOR_NAME.SafePal },
      { name: CONNECTOR_NAME.WalletConnect },
    ];

    const orderedConnectors = findAndFilterConnectors(connectors, searchParams);

    if (isMobile) {
      return orderedConnectors.filter(
        (c) =>
          c.name.includes(CONNECTOR_NAME.MetaMask) ||
          c.name.includes(CONNECTOR_NAME.WalletConnect),
      );
    }

    return orderedConnectors;
  }, [connectors, isMobile]);
}
