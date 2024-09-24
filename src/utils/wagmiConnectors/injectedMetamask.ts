import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';
import METAMASK_ICON from './walletIcons/metamask-icon.svg';

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
