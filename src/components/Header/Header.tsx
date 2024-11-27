import React from 'react';

import propTypes from 'prop-types';
import { useAccount, useBalance, useDisconnect, useSwitchChain } from 'wagmi';
import { HeaderBody } from './components/HeaderBody';
import { useFilteredConnectors } from '../../hooks';
import { formatAmountString } from '../../utils';
import { HeaderProps } from './Header.types';
import { client } from './prismic';
import { PrismicProvider } from '@prismicio/react';

export function Header({ chainId, ...props }: HeaderProps) {
  const { switchChain } = useSwitchChain();
  const { disconnect } = useDisconnect();
  const { address, chainId: currentChainId, connector } = useAccount();

  const isSupportedChain = chainId === currentChainId;
  const { filteredConnectors, mockedConnectors } = useFilteredConnectors();

  const { data: balance, isSuccess: isBalanceLoaded } = useBalance({
    address,
  });

  return (
    <PrismicProvider client={client}>
      <HeaderBody
        disconnect={disconnect}
        account={address}
        switchToAmb={() => switchChain({ chainId })}
        currentConnector={connector}
        isSupportedChain={isSupportedChain}
        connectors={filteredConnectors}
        promoConnectors={mockedConnectors}
        balance={isBalanceLoaded ? formatAmountString(balance.formatted) : '0'}
        {...props}
      />
    </PrismicProvider>
  );
}

Header.propTypes = {
  disconnect: propTypes.func,
  account: propTypes.string,
  balance: propTypes.string,
  connectors: propTypes.array,
  promoConnectors: propTypes.array,
  currentConnector: propTypes.object,
  isSupportedChain: propTypes.bool,
  switchToAmb: propTypes.func,
  chainId: propTypes.number.isRequired,
  disabled: propTypes.bool,
  logotype: propTypes.object,
};
