import { allNetworks } from '../constants';
import { Config, createConfig, http } from 'wagmi';
import { createClient } from 'viem';
import { injectedMetaMask } from './wagmiConnectors/predefinedConnectors/injectedMetamask';
import { injectedGateWeb3 } from './wagmiConnectors/predefinedConnectors/injectedGateWeb3';
import { injectedSafepal } from './wagmiConnectors/predefinedConnectors/injectedSafepal';
import { injectedBitget } from './wagmiConnectors/predefinedConnectors/injectedBitget';
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
