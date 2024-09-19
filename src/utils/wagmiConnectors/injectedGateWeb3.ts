import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';

// TODO: Import the GateWeb3 icon
import GATEWEB3_ICON from '@/assets/wallets/gateweb3-icon.svg';

// TODO: use deeplink
export function injectedGateWeb3() {
  return createConnector((config) => {
    const injectedConnector = injected()(config);

    return {
      ...injectedConnector,
      connect() {
        window.open('https://www.gate.io/web3');
        return Promise.reject('GateWallet is not detected');
      },
      get icon() {
        return GATEWEB3_ICON;
      },
      get name() {
        return 'GateWallet';
      },
      get predefined() {
        return true;
      },
    };
  });
}
