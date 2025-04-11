import { allNetworks, ChainIdValues, networkById } from '../constants';
import { Config, createConfig, http } from 'wagmi';
import { createClient } from 'viem';
import {
  metaMask,
  walletConnect,
  WalletConnectParameters,
} from 'wagmi/connectors';

export function createAirdaoConfig(
  walletconnectConfig: WalletConnectParameters,
  chainId?: number,
): Config {
  let chains;

  if (chainId) {
    if (!networkById[chainId as ChainIdValues]) {
      throw new Error(`There's no AirDAO network with chainId ${chainId}`);
    }

    chains = [networkById[chainId]];
  } else {
    chains = allNetworks;
  }

  return createConfig({
    chains,
    multiInjectedProviderDiscovery: true,
    client({ chain }) {
      return createClient({ chain, transport: http() });
    },
    connectors: [walletConnect(walletconnectConfig), metaMask()],
  });
}
