import { useChains, useSwitchChain } from 'wagmi';
import { useCallback } from 'react';

export function useSwitchToConfiguredChain() {
  const { switchChain } = useSwitchChain();
  const chains = useChains();

  return useCallback(
    () => switchChain({ chainId: chains[0].id }),
    [chains, switchChain],
  );
}
