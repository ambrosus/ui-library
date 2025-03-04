import { useMemo } from 'react';
import { Connector, useConnect } from 'wagmi';
import useIsMobilePlatform from './useIsMobilePlatform';
import {
  CONNECTOR_NAME_LIST,
  MOBILE_CONNECTOR_NAME_LIST,
  overrideIconInConnector,
  mockedConnectorsByName,
  MockedConnector,
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
): FilteredConnectors {
  const filteredConnectors: Connector[] = [];
  const mockedConnectors: MockedConnector[] = [];

  for (const name of desiredConnectorNames) {
    const connector = getConnectorByName(detectedConnectors, name);

    if (connector) {
      filteredConnectors.push(overrideIconInConnector(connector));
    } else {
      mockedConnectors.push(mockedConnectorsByName[name]);
    }
  }

  return { filteredConnectors, mockedConnectors };
}

export function useFilteredConnectors(): FilteredConnectors {
  const { connectors } = useConnect();
  console.log(connectors);

  const { isMobile } = useIsMobilePlatform();

  return useMemo(() => {
    if (isMobile) {
      return mergeConnectors(connectors, MOBILE_CONNECTOR_NAME_LIST);
    }

    return mergeConnectors(connectors, CONNECTOR_NAME_LIST);
  }, [connectors, isMobile]);
}

interface FilteredConnectors {
  filteredConnectors: Connector[];
  mockedConnectors: MockedConnector[];
}
