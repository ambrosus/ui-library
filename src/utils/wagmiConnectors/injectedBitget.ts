import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

//TODO: Import the Bitget icon
import BITGET_ICON from '@/assets/wallets/bitget-icon.svg';

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
        return BITGET_ICON;
      },
      get name() {
        return 'Bitget Wallet';
      },
      get predefined() {
        return true;
      },
    };
  });
}
