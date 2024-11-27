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
      http: ['https://rpc.airdao.io', 'https://network.ambrosus.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'AirDAO Explorer',
      url: 'https://airdao.io/explorer/',
    },
  },
  contracts: {
    multicall3: {
      address: '0x021de22a8b1B021f07a94B047AA557079BbCa6ed',
    },
  },
} as const satisfies Chain;

export const airdaoTestnet = {
  id: ChainId.AirdaoTestnet,
  name: 'AirDAO Testnet',
  nativeCurrency: {
    name: 'Amber',
    symbol: 'AMB',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [
        'https://testnet-rpc.airdao.io',
        'https://network.ambrosus-test.io',
      ],
    },
  },
  blockExplorers: {
    default: {
      name: 'AirDAO Explorer',
      url: 'https://testnet.airdao.io/explorer/',
    },
  },
  contracts: {
    multicall3: {
      address: '0xf4FBBC66fD2B6323B7360072CDF32C0F816c9836',
    },
  },
  testnet: true,
} as const satisfies Chain;

export const airdaoDevnet = {
  id: ChainId.AirdaoDevnet,
  name: 'AirDAO Devnet',
  nativeCurrency: {
    name: 'Amber',
    symbol: 'AMB',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://devnet-rpc.airdao.io', 'https://network.ambrosus-dev.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'AirDAO Explorer',
      url: 'https://devnet.airdao.io/explorer/',
    },
  },
  contracts: {
    multicall3: {
      address: '0x03d6b0F35b62400D89Ce1D1A1C0Fb30A04b4dc90',
    },
  },
  testnet: true,
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
