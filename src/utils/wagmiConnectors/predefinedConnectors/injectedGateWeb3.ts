import { createConnector } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { CONNECTOR_ICONS } from '../icons';
import { CONNECTOR_NAME } from '../names';

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
        return CONNECTOR_ICONS[CONNECTOR_NAME.GateWallet];
      },
      get name() {
        return CONNECTOR_NAME.GateWallet;
      },
      get predefined() {
        return true;
      },
    };
  });
}
