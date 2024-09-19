import { allNetworks } from '../constants';
import { Config, createConfig, http } from 'wagmi';
import { createClient } from 'viem';
import { injectedMetaMask } from './wagmiConnectors/injectedMetamask';
import { injectedGateWeb3 } from './wagmiConnectors/injectedGateWeb3';
import { injectedSafepal } from './wagmiConnectors/injectedSafepal';
import { injectedBitget } from './wagmiConnectors/injectedBitget';
import { walletConnect, WalletConnectParameters } from 'wagmi/connectors';

export function createAirdaoConfig(
  walletconnectConfig: WalletConnectParameters,
): Config {
  return createConfig({
    chains: allNetworks,
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
