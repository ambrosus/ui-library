// order matters
export const CONNECTOR_NAME = {
  MetaMask: 'MetaMask',
  WalletConnect: 'WalletConnect',
  SafePal: 'SafePal',
  Bitget: 'Bitget Wallet',
  GateWallet: 'GateWallet',
} as const;

export const CONNECTOR_NAME_LIST = Object.values(CONNECTOR_NAME);
export const MOBILE_CONNECTOR_NAME_LIST = [
  CONNECTOR_NAME.MetaMask,
  CONNECTOR_NAME.WalletConnect,
];
