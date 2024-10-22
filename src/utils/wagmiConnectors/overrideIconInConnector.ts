import { Connector } from 'wagmi';
import { CONNECTOR_ICONS } from './icons';
import { CONNECTOR_NAME } from './names';

export function overrideIconInConnector(connector: Connector): Connector {
  return {
    ...connector,
    get icon() {
      return CONNECTOR_ICONS[CONNECTOR_NAME[connector.name]];
    },
  } as Connector;
}
