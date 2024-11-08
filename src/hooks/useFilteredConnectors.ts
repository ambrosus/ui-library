import { useMemo } from 'react';
import { Connector, useConnect } from 'wagmi';
import useIsMobilePlatform from './useIsMobilePlatform';
import {
  CONNECTOR_NAME_LIST,
  MOBILE_CONNECTOR_NAME_LIST,
  overrideIconInConnector,
  mockedConnectorsByName,
} from '../utils';

function getConnectorByName(
  connectors: readonly Connector[],
  name: string,
): Connector | undefined {
  return connectors.find((connector) => connector.name === name);
}

function mergeConnectors(
  detectedConnectors: readonly Connector[],
  desiredConnectorNames: string[],
): Connector[] {
  return desiredConnectorNames.map((name) => {
    const connector = getConnectorByName(detectedConnectors, name);

    return connector
      ? overrideIconInConnector(connector)
      : mockedConnectorsByName[name];
  });
}

export function useFilteredConnectors() {
  const { connectors } = useConnect();
  const { isMobile } = useIsMobilePlatform();

  return useMemo(() => {
    if (isMobile) {
      return mergeConnectors(connectors, MOBILE_CONNECTOR_NAME_LIST);
    }

    return mergeConnectors(connectors, CONNECTOR_NAME_LIST);
  }, [connectors, isMobile]);
}
