import { useContext } from 'react';
import { ConnectWalletModalContext } from './context';

export function useConnectWalletModal() {
  return useContext(ConnectWalletModalContext);
}
