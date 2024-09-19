import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

// TODO: Import the SafePal icon
import SAFEPAL_ICON from '@/assets/wallets/safepal-icon.svg';

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
        return SAFEPAL_ICON;
      },
      get name() {
        return 'SafePal';
      },
      get predefined() {
        return true;
      },
    };
  });
}
