import { CONNECTOR_ICONS } from './icons';
import { CONNECTOR_NAME } from './names';

interface MockedConnector {
  connect(): void;
  icon: string;
  name: string;
  predefined: boolean;
}

export const metamaskMockedConnector: MockedConnector = {
  connect: () => {
    window.open('https://metamask.io/');
  },
  icon: CONNECTOR_ICONS[CONNECTOR_NAME.MetaMask],
  name: CONNECTOR_NAME.MetaMask,
  predefined: true,
};

export const bitgetMockedConnector: MockedConnector = {
  connect: () => {
    window.open('https://web3.bitget.com/en?source=bitget');
  },
  icon: CONNECTOR_ICONS[CONNECTOR_NAME.Bitget],
  name: CONNECTOR_NAME.Bitget,
  predefined: true,
};

export const gateMockedConnector: MockedConnector = {
  connect: () => {
    window.open('https://www.gate.io/');
  },
  icon: CONNECTOR_ICONS[CONNECTOR_NAME.GateWallet],
  name: CONNECTOR_NAME.GateWallet,
  predefined: true,
};

export const safepalMockedConnector: MockedConnector = {
  connect: () => {
    window.open('https://www.safepal.io/');
  },
  icon: CONNECTOR_ICONS[CONNECTOR_NAME.SafePal],
  name: CONNECTOR_NAME.SafePal,
  predefined: true,
};

export const mockedConnectorsByName = {
  [CONNECTOR_NAME.MetaMask]: metamaskMockedConnector,
  [CONNECTOR_NAME.Bitget]: bitgetMockedConnector,
  [CONNECTOR_NAME.SafePal]: safepalMockedConnector,
  [CONNECTOR_NAME.GateWallet]: gateMockedConnector,
};
