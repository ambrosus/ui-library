## Installation checklist
- [ ] Install peer dependencies
- [ ] Wrap app with WagmiProvider and TanstackProvider
- [ ] Swap all occurences of useWeb3React with wagmi's useAccount for read data
- [ ] Use useEthersProvider for write actions
- [ ] (optional) use new Header props

### Install peer dependencies
```bash
yarn add wagmi@2.12.16 viem@2.21.15 @tanstack/react-query@5.51.24
```
```bash
npm install wagmi@2.12.16 viem@2.21.15 @tanstack/react-query@5.51.24
```

### Wrap app with WagmiProvider and TanstackProvider
```jsx
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createAirdaoConfigWithChainId, createAirdaoConfig } from "@airdao/ui-library";

const queryClient = new QueryClient();

// store this in env variables
const { REACT_APP_WC_PROJECT_ID: projectId, REACT_APP_CHAIN_ID: chainId } =
  process.env;

const WC_PARAMS = {
  projectId: projectId,
  metadata: {
    name: "Project name",
    description: "Project description",
    url: "project url",
  },
};

// for specific chain
const config = createAirdaoConfigWithChainId(+chainId, WC_PARAMS); //chainId must be a number

// for all AirDAO chains (mainnet, testnet, devnet)
const allNetworksConfig = createAirdaoConfig(WC_PARAMS);

export default function ConfiguredWagmiProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
```

### Use Wagmi hooks instead of useWeb3React
#### Before
```jsx
import { useWeb3React } from "@web3-react/core";

function MyComponent() {
  const { 
    connector, 
    chainId, 
    accounts, 
    isActivating,
    account, 
    isActive,
  } = useWeb3React();
  
  return (...)
}
```


#### After
```jsx
import { useAccount } from "wagmi";
import { useEthersSigner } from "@airdao/ui-library";

const {
  address, // account
  addresses, // accounts
  chainId,
  connector,
  isConnecting, // isActivating
  isConnected, // isActive
  ...
} = useAccount()

const signer = useEthersSigner({ chainId }) //chainId optional
```
https://wagmi.sh/react/api/hooks/useAccount

### Update Header
#### Before
```jsx
import { Header } from "@airdao/ui-library";

import {
  useAutoLogin,
  useAuthorization,
} from "airdao-components-and-tools/hooks";

import {
  switchToAmb,
  metamaskConnector,
  walletconnectConnector,
  bitgetWalletConnector,
} from "airdao-components-and-tools/utils";

function Layout() {

  const { account, connector, provider, isActive, chainId } = useWeb3React();

  const { loginMetamask, loginWalletConnect, loginSafepal, loginBitget, logout } = useAuthorization(
    metamaskConnector,
    walletconnectConnector,
    bitgetWalletConnector,
  );
  
  return (
    <main>
      <Header
        loginSafepal={loginSafepal}
        loginMetamask={loginMetamask}
        loginBitget={loginBitget}
        loginWalletConnect={loginWalletConnect}
        disconnect={logout}
        account={account}
        connector={connector}
        ... // other props
      />
      ...
    </main>
  )
}
```
#### After
```jsx
