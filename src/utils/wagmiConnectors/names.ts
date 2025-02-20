export const CONNECTOR_NAME = {
  MetaMask: 'MetaMask',
  WalletConnect: 'WalletConnect',
  SafePal: 'SafePal',
  Bitget: 'Bitget Wallet',
  GateWallet: 'GateWallet',
  AirDAO: 'AirDAO Wallet',
} as const;

export const CONNECTOR_NAME_LIST = [
  CONNECTOR_NAME.MetaMask,
  CONNECTOR_NAME.WalletConnect,
  CONNECTOR_NAME.SafePal,
  CONNECTOR_NAME.Bitget,
  CONNECTOR_NAME.GateWallet,
];

export const MOBILE_CONNECTOR_NAME_LIST = [
  CONNECTOR_NAME.MetaMask,
  CONNECTOR_NAME.AirDAO,
  CONNECTOR_NAME.WalletConnect,
];
