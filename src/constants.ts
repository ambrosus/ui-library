import { Chain } from 'viem';

export const ChainId = {
  AirdaoMainnet: 16718,
  AirdaoTestnet: 22040,
  AirdaoDevnet: 30746,
} as const;

export const airdaoMainnet = {
  id: ChainId.AirdaoMainnet,
  name: 'AirDAO Mainnet',
  nativeCurrency: {
    name: 'Amber',
    symbol: 'AMB',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://network.ambrosus.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'AirDAO Explorer',
      url: 'https://airdao.io/explorer/',
    },
  },
} as const satisfies Chain;

export const airdaoTestnet = {
  id: ChainId.AirdaoMainnet,
  name: 'AirDAO Testnet',
  nativeCurrency: {
    name: 'Amber',
    symbol: 'AMB',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://network.ambrosus-test.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'AirDAO Explorer',
      url: 'https://testnet.airdao.io/explorer/',
    },
  },
} as const satisfies Chain;

export const airdaoDevnet = {
  id: ChainId.AirdaoMainnet,
  name: 'AirDAO Devnet',
  nativeCurrency: {
    name: 'Amber',
    symbol: 'AMB',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://network.ambrosus-dev.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'AirDAO Explorer',
      url: 'https://devnet.airdao.io/explorer/',
    },
  },
} as const satisfies Chain;

export type ChainIdValues = (typeof ChainId)[keyof typeof ChainId];

interface NetworkById extends Record<ChainIdValues, Chain> {}

export const networkById: NetworkById = {
  [ChainId.AirdaoMainnet]: airdaoMainnet,
  [ChainId.AirdaoTestnet]: airdaoTestnet,
  [ChainId.AirdaoDevnet]: airdaoDevnet,
};

export const allNetworks = [
  airdaoMainnet,
  airdaoTestnet,
  airdaoDevnet,
] as const;

export const CONNECTOR_NAME = {
  WalletConnect: 'WalletConnect',
  MetaMask: 'MetaMask',
  SafePal: 'SafePal',
  Bitget: 'Bitget Wallet',
  GateWallet: 'GateWallet',
} as const;
