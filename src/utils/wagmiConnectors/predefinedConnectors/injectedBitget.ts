import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { CONNECTOR_NAME } from '../names';
import { CONNECTOR_ICONS } from '../icons';

//TODO: use deeplink
export function injectedBitget() {
  return createConnector((config) => {
    const injectedConnector = injected()(config);

    return {
      ...injectedConnector,
      connect() {
        window.open('https://web3.bitget.com/en?source=bitget');
        return Promise.reject('Bitget is not detected');
      },
      get icon() {
        return CONNECTOR_ICONS[CONNECTOR_NAME.Bitget];
      },
      get name() {
        return CONNECTOR_NAME.Bitget;
      },
      get predefined() {
        return true;
      },
    };
  });
}
