import { Config, createConfig, http } from 'wagmi';
import { walletConnect, WalletConnectParameters } from 'wagmi/connectors';
import { ChainIdValues, networkById } from '../constants';
import { createClient } from 'viem';

export function createAirdaoConfigWithChainId(
  chainId: number,
  walletconnectConfig: WalletConnectParameters,
): Config {
  if (!networkById[chainId as ChainIdValues]) {
    throw new Error(`There's no AirDAO network with chainId ${chainId}`);
  }

  return createConfig({
    chains: [networkById[chainId]],
    multiInjectedProviderDiscovery: true,
    client({ chain }) {
      return createClient({ chain, transport: http() });
    },
    connectors: [walletConnect(walletconnectConfig)],
  });
}
