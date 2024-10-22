import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { CONNECTOR_NAME } from '../names';
import { CONNECTOR_ICONS } from '../icons';

// TODO: use deeplink
export function injectedMetaMask() {
  return createConnector((config) => {
    const injectedConnector = injected()(config);

    return {
      ...injectedConnector,
      connect() {
        window.open('https://metamask.io/');
        return Promise.reject('MetaMask is not detected');
      },
      get icon() {
        return CONNECTOR_ICONS[CONNECTOR_NAME.MetaMask];
      },
      get name() {
        return CONNECTOR_NAME.MetaMask;
      },
      get predefined() {
        return true;
      },
    };
  });
}
