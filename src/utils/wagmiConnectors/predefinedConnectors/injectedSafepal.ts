import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { CONNECTOR_NAME } from '../names';
import { CONNECTOR_ICONS } from '../icons';

// TODO: use deeplink
export function injectedSafepal() {
  return createConnector((config) => {
    const injectedConnector = injected()(config);

    return {
      ...injectedConnector,
      connect() {
        window.open('https://www.safepal.com/download?product=2');
        return Promise.reject('SafePal is not detected');
      },
      get icon() {
        return CONNECTOR_ICONS[CONNECTOR_NAME.SafePal];
      },
      get name() {
        return CONNECTOR_NAME.SafePal;
      },
      get predefined() {
        return true;
      },
    };
  });
}
