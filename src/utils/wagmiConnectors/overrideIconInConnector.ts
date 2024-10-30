import { Connector } from 'wagmi';
import { CONNECTOR_ICONS } from './icons';

export function overrideIconInConnector(connector: Connector): Connector {
  return {
    ...connector,
    get icon() {
      return CONNECTOR_ICONS[connector.name];
    },
  } as Connector;
}
