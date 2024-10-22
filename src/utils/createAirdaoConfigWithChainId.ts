import { Config, createConfig, http } from 'wagmi';
import { walletConnect, WalletConnectParameters } from 'wagmi/connectors';
import { ChainIdValues, networkById } from '../constants';
import { injectedMetaMask } from './wagmiConnectors/predefinedConnectors/injectedMetamask';
import { injectedBitget } from './wagmiConnectors/predefinedConnectors/injectedBitget';
import { injectedSafepal } from './wagmiConnectors/predefinedConnectors/injectedSafepal';
import { injectedGateWeb3 } from './wagmiConnectors/predefinedConnectors/injectedGateWeb3';
import { createClient } from 'viem';

export function createAirdaoConfigWithChainId(
  chainId: ChainIdValues,
  walletconnectConfig: WalletConnectParameters,
): Config {
  return createConfig({
    chains: [networkById[chainId]],
    multiInjectedProviderDiscovery: true,
    client({ chain }) {
      return createClient({ chain, transport: http() });
    },
    connectors: [
      injectedMetaMask(),
      injectedGateWeb3(),
      injectedSafepal(),
      injectedBitget(),
      walletConnect(walletconnectConfig),
    ],
  });
}
