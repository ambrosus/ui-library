import { Config, createConfig, http } from 'wagmi';
import { walletConnect, WalletConnectParameters } from 'wagmi/connectors';
import { ChainIdValues, networkById } from '../constants';
import { injectedMetaMask } from './wagmiConnectors/injectedMetamask';
import { injectedBitget } from './wagmiConnectors/injectedBitget';
import { injectedSafepal } from './wagmiConnectors/injectedSafepal';
import { injectedGateWeb3 } from './wagmiConnectors/injectedGateWeb3';
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
