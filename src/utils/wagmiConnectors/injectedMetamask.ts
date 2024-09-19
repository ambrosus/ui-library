import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

// TODO: Import the MetaMask icon
import METAMASK_ICON from '@/assets/wallets/metamask-icon.svg';

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
        return METAMASK_ICON;
      },
      get name() {
        return 'MetaMask';
      },
      get predefined() {
        return true;
      },
    };
  });
}
